---
layout: post
author: "Sebastián Héctor Alcántara"
title:  "Sending AJAX GET requests to a Django server without jQuery"
date:   2019-09-02
icon: "☕️"
categories: blog
keywords:
  - django
---

Hello!

Let's say you want to send a `GET` request to a Django based server, and you want to use vanilla `JavaScript`. You don't want to use jQuery, nor any other framework.

<!-- more -->

### The HTML:

So, lets say you have a Django app called test\_app, with a js script called "get\_example.js" in its static folder.
We want the server to return a message when this button is clicked, so we write this index.html:

```html
<!DOCTYPE html>
<html>
    <head>
        {% load static %}
        <script src='{% static "test_app/get_example.js" %}' defer></script>
        <title>Test html</title>
    </head>
    <body>
        <button id="test-button">Peter</button>
    </body>
</html>
```

I use the `defer` attribute here to make sure the script is run after the page has finished parsing. By using `defer`, we avoid having to wrap all the script in a `DOMContentLoaded` event listener.

### The JavaScript:

Next, lets write the **JavaScript** code to listen for the click and to send the `GET` request. Let's say we want to ask the server for the last name associated to the first name that was in the button and replace the text in said button with it:

```javascript
document.querySelector('#test-button').onclick = () =>
    {
        awesome_name = document.querySelector('#test-button').innerHTML;
        const request_for_last_name = new XMLHttpRequest();
        request_for_last_name.open('GET', 'users/who?fname=' + awesome_name, true);
        request_for_last_name.send();
        request_for_last_name.onload = () =>
        {
            response_data = JSON.parse(request_for_last_name.responseText);
            document.querySelector('#test-button').innerHTML = "Last name: " + response_data.lname;
        };
    };
```

The key here is `'users/who?fname=' + awesome_name` part.

We will use the route `users/who` for Django to be able to associate our request to the Python code to run via the **urls.py** file.

With `?fname=` we are saying that we will be sendind data called "fname" in this request.

Then, `+ awesome_name` puts the value of the awesome_name variable to the request as the value of "fname".

So, when we clic the button, that GET request will be sent to `users/who?fname=Peter`.

### The Python:

The Python code for the Django **urls.py** file should be something like:

```python
from django.urls import path

from . import views

urlpatterns = [
    path("", views.example),
    path("users/who", views.get_last_name_view)
]
```

Note that we wrote `users/who`. That way, when we fire the request, Django will match the adress in it and run the get_last_name_view function in our views.py file. Note that you can use regular expression (regex) patterns for the path instead.

Side note: it is important to differentiate the paths of diferent kinds GET requests (especially when using regex): if you have for example two differet urlpatterns that Django understands as similar to the adress on your request, it will trigger the first one that matches.

Finally the Python code for the Django **views.py** file:

```python
from django.shortcuts import render
from django.http import JsonResponse

def example(request):
    return render(request, "test_app/index.html")

def get_last_name_view(request):
    fname = request.GET.get('fname')
    response_data = {}
    if fname == "Peter":
        response_data['lname'] = "Pan"
    else:
        response_data['lname'] = "Not found"
    return JsonResponse(response_data, safe=False)
```

In this example, the else statement will never be run. But I like to be explicit about if statements.

Here, in `fname=request.GET.get('fname')`, we take the value of `fname` sent in the request, and assign it to the fname Python variable.
Next, we check if it is 'Peter' and if so, we put the last name 'Pan' in a response_data dictionary that we finally return with JsonResponse (with the key "lname").

That way, our JavasCript code can access this information once we parse the response with `JSON.parse` as shown above.

Cheers, have a good one!