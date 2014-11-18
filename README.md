fumanchu.js
===========

All-code templating for JavaScript.
-----------------------------------

| Install   |
| --------- |
| `bower install --save fumanchu.js` |


HTML markup is just super. Most of the time. Well, some of the time.

When it finds its way into my JavaScript as generated string data,
it is not super. It is annoying. JQuery doesn't help (still stuck with lots of angle brackets). Templating engines with "moustache"
syntax separate my markup from my code,
which is not what I want. DOM manipulations, while being all code, are obnoxiously verbose. Come on! I just want the
ability to generate content using normal JavaScript paradigms. Is that so wrong?

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

That's 100% JavaScript code, and it is also 100% JavaScript arrays and objects. Think of the possibilities.
I could generate HTML documents using normal `Array` and `Object` methods like `.map()` and `.concat()`. I could
share HTML markup as pure JSON documents. Think of all the things you could do...

### If only there were a simple way to turn this into HTML!

`fumanchu.js` is a light and fast library that converts JavaScript structures of a specific form to
HTML DOM objects. Check out `example.html` for some hackable examples that range from simple to mildly complex,
with and without JQuery.

`fumanchu.js` adds `Array.prototype.toHtml()` to convert a properly formed JavaScript `Array` into a browser DOM element.
It is as simple as this:

```
document.querySelector('body').append( ['p', 'Hello, world!'].toHtml() );
```

The rules:

  * Use an `Array` to define an HTML element.
  * The first item in the `Array` must be a string. This is the element tag name.
  * If the second item in the array is a JavaScript `Object`, it is treated as the set of attributes for the element.
  * For the remaining items:
    * If the item is an `Array`, it is a child HTML element.
    * Otherwise, the item is converted to a `String` and treated as (automatically escaped) text.

Okay, look, this library is still in the early stages of infancy. There is a lot more I want it to do, and it has
some rough edges. Still, it is very simple, and I don't expect it to get much more complex.

Enjoy!


