Basically, on faster connections, node-oauth receives ECONNRESET and triggers the provided callback twice. A quick way to fix this is to add a single line to node_modules/oauth/lib/oauth2.js near line 161 inside the error listener:

   request.on('error', function(e) {
     if (callbackCalled) { return }  // Add this line
     callbackCalled= true;
     callback(e);
   });
