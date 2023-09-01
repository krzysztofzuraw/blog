---
title: Amazon Glacier + Arq backup
pubDate: 2021-08-14
slug: 2021/amazon-glacier-arq-backup
---

When it comes to the backup I was using mac [Time Machine](https://support.apple.com/en-us/HT201250) - it worked fine as a hard drive backup. Problem with that was using only one place to store my data.

To fix it I run on searching through the internet to see if there are different solutions to my problem. I found out blog post about [Amazon S3 photo backup solution](https://pawelgrzybek.com/my-amazon-s3-photo-backup-solution/).

Main idea was to use [Amazon S3 Glacier](https://aws.amazon.com/s3/glacier/) to store data. How is Glacier different from other available solutions? It turns out that you pay a really small fee for storing your data but to retrieve it you need to let know AWS in advance. Four hours in advance. It was not a problem for me so I decided to go this route.

Now I had my backup location I started wondering what tool I can use to backup data into AWS. I could used the same solution as Paweł - and do it manually but I opt for more automated application - [Arq Backup](https://www.arqbackup.com/). Why?

- it is not subscription
- I can backup to multiple locations at once like AWS & my local hard drive
- Mac native app

I bought both space on AWS & Arq backup and started using it. I was eager to see what will be my invoice after one month of storing data - it turns out for storing about 10GB of data I pay around USD 0.06 per month.

## Summary

In this blog post I wrote why I picked [Arq backup](https://www.arqbackup.com/) & AWS glacier as my backup solution:

- easy to integrate + multiple backup destinations
- works
- cheap
