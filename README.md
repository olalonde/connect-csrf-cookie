# connect-csrf-cookie

By default this middleware sets a "csrftoken" cookie containing the csrf
token generated by the csrf middleware. This is especially helpful for
Single Page Apps which make lots of AJAX calls.

This middleware requires session support and the csrf middleware, thus
should be added somewhere below session(), cookieParser() and csrf().

See this [answer on StackOverflow](http://stackoverflow.com/a/20518324/96855) for
the security implications.

## Install
  
    npm install connect-csrf-cookie

## Usage

```javascript
app.use(connect.cookieParser());
app.use(connect.session({ secret: 'keyboard cat' }));
app.use(connect.csrf());
app.use(require('connect-csrf-cookie')());
```

The middleware takes an optional parameter `cookie_key` which will
determine the name of the cookie.


