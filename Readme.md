# isset
An isset function useful for form validation.

### Install
```
npm install iset
```

### API
```js
isset(value)
```

### Usage

```js
var isset = require('iset')

if(isset('my value')){
    console.log('my value is set')
} else {
    console.log('my value is not set')
}
```

### Rules
```
	- isset(null) // returns "false"
	- isset(false) // returns "false"
	- isset("false") // returns "false"
	- isset(undefined) // returns "false"
	- isset({}) // returns "true"
	- isset([]) // returns "false"
	- isset("") // returns "false"
	- isset(true) // returns "true"
	- isset("true") // returns "true"
```

### License


## License
(The MIT License)

Copyright (c) 2014-2017 Halász Ádám

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.