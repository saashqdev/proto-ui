Typography

## Example
### Title

``` html
<h1>H1 Title 1 <small>Subtitle 1</small></h1>
<h2>H2 Heading 2 <small>Subheading 2</small></h2>
<h3>H3 Title 3 <small>Subtitle 3</small></h3>
<h4>H4 Title 4 <small>Subtitle 4</small></h4>
<h5>H5 Title 5 <small>Subtitle 5</small></h5>
<h6>H6 Title 6 <small>Subtitle 6</small></h6>
```

### Link

Since `<a>` is widely used in components, please use [u-link](./u-link) in business.

### Paragraph

``` html
<p>Summer is quiet and good. The days like water exude a light joy. In the morning with the fragrance of flowers and the singing of birds, I like to lean against the window with the fragrance of a cup of tea, watching the white clouds drifting gently in the sky, letting time flow quietly through my fingertips, letting a heart that has been colored by worldly fireworks gradually calm down, silently thinking of a gentle soul, and having a quiet time. </p>
<p>I have always believed that the best state of mind is not to avoid the hustle and bustle of life, but to build a fence and plant chrysanthemums in your heart. The hustle and bustle of the world always makes people tired and exhausted. Find a leisurely afternoon, close the window of your soul, isolate yourself from the hustle and bustle of the world, and drink a cup of tea and a book, which is a period of quiet time. Tea can taste the flavors of life; books can help you find the refuge of your soul. Gently embrace a meter of sunshine in your arms, and with the fragrance of books, let the flowing thoughts ripple in the seasons, and life will be gracefully transformed into a flower in this leisurely time. </p>
```

### Horizontal Line

``` html
<hr>
```

### Special Text

``` html
<u-linear-layout gap="small">
    Emphasize text
    <strong>Bold text</strong>
    <ins>Insert text</ins>
    <del>Delete text</del>
    <mark>Mark text</mark>
    <small>Reduce Text</small>
    <code>Code Snippet</code>
    <abbr title="Abbreviation">Abbr</abbr>
    <span><sup>Upper</sup><sub>Lower</sub> Standard</span>
    <q>Quote snippet</q>
    <dfn>Define term</dfn>
</u-linear-layout>
```

### List

``` html
<ul>
    <li>Option 1</li>
    <li>Option 2
        <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ul>
    </li>
    <li>Option 3</li>
</ul>
<ol>
    <li>Option 1</li>
    <li>Option 2
        <ol>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ol>
    </li>
    <li>Option 3</li>
</ol>
```

### Description List

``` html
<dl>
    <dt>Web front end</dt>
    <dd>Usually refers to the front-end part of the website, including the presentation layer and structure layer of the website. Therefore, front-end technology is generally divided into front-end design and front-end development. Front-end design can generally be understood as the visual design of the website, and front-end development is the front-end code implementation of the website, including basic HTML, CSS and JavaScript. </dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets is a computer language used to express the styles of files such as HTML or XML. The latest version is CSS3, which is a style design language that can truly separate web page presentation from content. </dd>
    <dt>JavaScript</dt>
    <dd>A directly interpreted scripting language, a dynamically typed, weakly typed, prototype-based language with built-in support for types, widely used as a client-side scripting language, first used on HTML web pages to add dynamic functionality to HTML web pages. </dd>
</dl>
```

### Blockquote

``` html
<blockquote>
    I don't know how people in the world evaluate me. But I think this way: I am like a child playing on the seashore, sometimes picking up a few clear stones, sometimes picking up a few beautiful shells and rejoicing over them. The vast ocean of truth is still unfolding before me.
</blockquote>
```

### Code Block

``` html
<pre>
factorial = (num) ->
    if not /^\d+$/.test(num)
        throw 'Error: Not an integer!'

    _factorial = (num) ->
        return (if num <= 1 then 1 else num * _factorial(num - 1))

    return _factorial(num)
</pre>
```

### Buttons

``` html
<u-linear-layout gap="small" direction="vertical">
    <u-linear-layout gap="small">
        <kbd>⌘</kbd>
        <kbd>⌥</kbd>
        <kbd>⌃</kbd>
        <kbd>⇧</kbd>
        <kbd>⇪</kbd>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <kbd>←</kbd>
        <kbd>→</kbd>
        <kbd>↑</kbd>
        <kbd>↓</kbd>
        <kbd>⇥</kbd>
        <kbd>Tab</kbd>
        <kbd>⌫</kbd>
        <kbd>Delete</kbd>
        <kbd>↩</kbd>
        <kbd>Enter</kbd>
        <kbd>␣</kbd>
        <kbd>Space</kbd>
        <kbd>⎋</kbd>
        <kbd>Escape</kbd>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <kbd>Q</kbd>
        <kbd>W</kbd>
        <kbd>E</kbd>
        <kbd>R</kbd>
        <kbd>T</kbd>
        <kbd>Y</kbd>
    </u-linear-layout>
</u-linear-layout>
```