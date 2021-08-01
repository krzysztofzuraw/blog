---
layout: layouts/article.html
title: Blog stats
---

# Blog stats

## Blog posts written per year

<table>
<thead>
  <tr>
    <th>Year</th>
    <th>Count</th>
  </tr>
</thead>
<tbody>
  {% for entry in collections.postStats %}
  {% for year, count in entry %}
  <tr>
    <td>{{ year }}</td>
    <td>{{ count}}</td>
  </tr>
  {% endfor %}
  {% endfor %}
</tbody>
</table>

## Books read per year

<table>
<thead>
  <tr>
    <th>Year</th>
    <th>Count</th>
  </tr>
</thead>
<tbody>
  {% for entry in collections.bookStats %}
  {% for year, count in entry %}
  <tr>
    <td>{{ year }}</td>
    <td>{{ count}}</td>
  </tr>
  {% endfor %}
  {% endfor %}
</tbody>
</table>

## Web vitals

<script src="https://unpkg.com/web-vitals-element@1.3.2/dist/web-vitals-element.styled.min.js"></script>
<web-vitals></web-vitals>
