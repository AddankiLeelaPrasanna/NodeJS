var http=require('http');
var imp2=require('./secondmodule');
http.createServer(function(req,res){
   const msg=imp2.hello();
   console.log(msg);
   res.write(msg);
   res.end();
}).listen(7890);
