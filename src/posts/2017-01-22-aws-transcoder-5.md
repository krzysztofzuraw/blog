---
title: Transcoding with AWS - part five
date: 2017-01-22
permalink: "/blog/2017/transcoding-aws-part-five/index.html"
---

**This is the last blog post in this series - the only thing that has to
be done is telling the user that file he or she uploads is processed. It
will be done by writing custom message application.**

## How message application should work

From previous I know
that the last point of my application flow is to inform user that file
is transcoded and ready to download. To do such thing I have to display
message on every webpage that current user is. This message should have
information about which file was processed. First I wanted to do this
with existing django messaging framework but as it turns out is works
only with request. As I decided to show message for different users as
long as they dismiss this information I had to write my own small
application.

## Implementation in django

In my newly created application I created following model:

```python
from django.db import models
from django.contrib.auth.models import User


class Message(models.Model):
    text = models.CharField(max_length=250)
    read = models.BooleanField(default=False)

    def __str__(self):
        return self.text
```

I decided to display my message only when it wasn't read. Based on that
right now I can use it in endpoint that works with AWS
(`audio_transcode/views.py`):

```python
@csrf_exempt
def transcode_complete(request):
    # rest of code is in previous blog post
    if json_body['Message']['state'] == 'COMPLETED':
        audio_file = AudioFile.objects.get(
            mp3_file=json_body['Message']['input']['key'][6:]
        )
        Message.objects.create(
        text='Your file {} has been processed'.format(audio_file.name)
         )
    return HttpResponse('OK')
```

As my message is created right now comes time for displaying it to the
user. To do that I have to add a message to template context. It can be
done via creating your own context manager:

```python
from .models import Message

def message_context_processor(request):
    if request.user.is_anonymous():
        return {'messages': []}
    return {'messages': Message.objects.filter(read=False)}
```

And registering it:

```python
TEMPLATES = [
    {
        # rest of options
        'OPTIONS': {
            'context_processors': [
            # rest of context processors
        'transcode_messages.context_processors.message_context_processor'
        ],
        },
 },
 ]
```

And adding a message as django template tag:

{% raw %}

```html
{% if messages %} {% for message in messages %}
<div
  class="alert alert-success alert-dismissible"
  data-message-id="{{ message.id }}"
  data-message-url="{% url 'messages:read-message' %}"
  role="alert"
>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">x</span>
  </button>
  {{ message.text }}
</div>
{% endfor %} {% endif %}
```

{% endraw %}

Which renders as follows:

{% img "2017-01-22-message", "Transcode complete message", "Transcode complete message" %}

In the previous screenshot, there is an X that dismiss the message and
make it read. To communicate with the backend I wrote quick jQuery
script:

```javascript
var csrftoken = Cookies.get("csrftoken");

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
}
$.ajaxSetup({
  beforeSend: function (xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  },
});

$(".alert").on("closed.bs.alert", function (event) {
  $.ajax({
    url: event.target.dataset.messageUrl,
    method: "POST",
    data: { message_id: event.target.dataset.messageId },
  });
});
```

Going from the top - django by default uses csrftoken so I have to get
it that my request passes the authentication. I'm using here library
called [js-cookie](https://github.com/js-cookie/js-cookie). In
`ajaxSetup` I tell jQuery to always send csrftokens while using ajax
request. Below I add the event listener to an element that has `.alert`
class. This event - `closed.bs.alert` is provided by bootstrap. On
triggering this event I send ajax POST to url from data attribute in
alert element -`data-message-url`. Data that I send is taken from
`data-message-id` attribute on alerts div. How endpoint for receiving
such messages looks like? See below:

```python
from .models import Message
from django.http import HttpResponse


def read_message(request):
     message = Message.objects.get(id=request.POST['message_id'])
 message.read = True
 message.save()
 return HttpResponse('OK')
```

Here I take `message_id` and set read to True and save message.

That's all for this blog post and blog series! I know that in this
design are particular flaws like: what is there will be more users than
one? Everybody will see everyone messages. If you have idea how to fix
that please write in comments below.

The code that I have made so far is available on
[github](https://github.com/krzysztofzuraw/blog_transcoder_aws). Stay
tuned for next blog post from this series.
