# Remember Me App

In this exercise we're going to build a simple NodeJS / Express app that uses
cookies to remember the name of visitors to our app.

1. Create an empty directory & repository
0. Run `npm init -y`
0. Run `npm install --save express cookie-parser`
0. Run `npm install --save-dev nodemon`
0. Put your express app in `app.js`
0. Start your app with `nodemon app.js`
0. Open another terminal window
0. On the homepage, render a form that asks for `Name` with a single text input
0. When you submit that form it should `POST` to `/set-name`
0. Within the `POST` `/set-name` route, take the posted name and save it to a cookie named `username`

I had to use ```body-parser``` in order to eaisly get the username value from the form data, but with that I just the middlewears interface, ```res.cookie('cookieName': value)``` followed by ```.send()```. Easy peasy.

Oh and the form needed to be embeded thusly:
```html
<form method="post" action="/set-name">
```