## ** to start the server
passport-google-oauth20 library has an issue.
To solve the issue and start the app, 

add a single line to node_modules/oauth/lib/oauth2.js near line 161 inside the error listener:
```javascript
   request.on('error', function(e) {
     if (callbackCalled) { return }  // Add this line
     callbackCalled= true;
     callback(e);
   });
````
the reason for the issue is 
"on faster connections, node-oauth receives ECONNRESET and triggers the provided callback twice" 
