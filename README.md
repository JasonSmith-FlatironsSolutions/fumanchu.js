fumanchu.js
===========

All-code templating for JavaScript.
-----------------------------------

HTML markup is just super. Most of the time. When it finds its way into my JavaScript as generated string data,
it is just annoying. JQuery doesn't help. Templating engines with "moustache" syntax separate my markup from my code,
which is not what I want.

In JavaScript, writing data structures using lists and maps (arrays and objects) is not only trivial, but incredibly
powerful. Consider, for example, the following HTML document:

```
<html lang="en">
    <head>
        <title>My Page</title>
        <link rel="icon" href="./images/favicon.ico">
    </head>
    <body>
        <h1>My Page</h1>
        <p>This is my page.</p>
    </body>
</html>
```

Now consider that the following JavaScript represents an equivalent structure. The data is the same and the
structure is the same. 

```
var htmlPage =
    ['html', {lang: 'en'},
        ['head',
            ['title', 'My Page'],
            ['link', {rel: 'icon', href='./images/favicon.ico'}]],
        ['body',
            ['h1', 'My Page'],
            ['p', 'This is my page.']]];
```

