# aurelia-cookie
A simplistic ES2015 class for working with cookies in Aurelia (or any modern Javascript application).

## Installation

``` shell
jspm install npm:aurelia-cookie
```

## Setup
Just like you would any other plugin, simply instantiate it with the framework inside of your main bootstrapping file.

``` javascript
aurelia.use
.plugin('aurelia-cookie');
```   
    
## Use

``` javascript
import {Cookie} from 'aurelia-cookie';

// Set a cookie
Cookie.set('name', 'value', {
    expiry: 1, // Expiry in hours, -1 for never expires or minimum 1 for one hour, 2 for two hours and so
    path: '', // Specify cookie path
    domain: '', // Domain restricted cookie
    secure: false // Either true or false
});

Cookie.get('name'); // Get a cookie value

Cookie.delete('name'); // Delete a cookie by name

Cookie.all(); // Returns an array of all set cookies
```