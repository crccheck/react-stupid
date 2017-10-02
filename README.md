React Thing
===========
[![Build Status](https://travis-ci.org/crccheck/react-thing.svg?branch=master)](https://travis-ci.org/crccheck/react-thing)

This is a dummy component designed to be a hello world example.

I needed a dirt simple React component distributed on NPM to experiment with
[preact-compat].


Usage
-----

```
npm install react-thing
```

```
const React = require('react')
const ReactDOM = require('react-dom')
const Thing = require('react-thing')

ReactDOM.render(<Thing />, document.body)
```

### Preact

You can also use this in Preact projects without [preact-compat] like:

```
const { h, render } = require('preact')
const Thing = require('react-thing/preact')

render(<Thing />, document.body)
```

[preact-compat]: https://github.com/developit/preact-compat
