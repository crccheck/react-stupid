React Thing
===========

This is a dummy component designed to be a hello world example.

I needed a dirt simple React component distributed on NPM to experiment with
[preact-compat](https://github.com/developit/preact-compat).


Usage
-----

```
npm install react-thing
```

```
const React = require('react');
const ReactDOM = require('react-dom');
const Thing = require('react-thing')

class App extends React.Component {
  render() {
    return <Thing />
  }
}

ReactDOM.render(
  <App />,
  document.body
)
```
