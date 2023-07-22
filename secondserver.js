var http=require('http');
//var imp=require('./firstmodule');
var imp2=require('./secondmodule');
http.createServer(function(req,res){
  //  res.writeHead(200,{'Content-Type':'text/html'});
   // res.write(imp.myDate());
   const msg=imp2.hello();
   console.log(msg);
   res.write(msg);
   res.end();
}).listen(7890);
