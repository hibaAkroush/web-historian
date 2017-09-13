var path = require('path');
var url=require('url');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var http = require('http')
var fs = require('fs');


// var loadindex=function(req,res){

// fs.readFile(archive.paths.siteAssets+'/index.html', function (err, html) {
//      // if (err) {
//      //     throw err; 
//      // }       
// res.writeHeader(200, {"Content-Type": "text/html"});  
// res.write(html);  
// res.end();  
    
// });	
// }
// var loadsite=function(req,res,sitename){

// fs.readFile(archive.paths.archivedSites+'/'+sitename, function (err, html) {    
// res.writeHeader(200, {"Content-Type": "text/html"});  
// res.write(html);  
// res.end();  
    
// });	
// }

exports.handleRequest = function (req, res) {
	status = 200
if (req.url ==="/arglebargle") {
status = 404
}
fs.readFile(archive.paths.siteAssets+'/index.html', function (err, html) {       
res.writeHeader(status, {"Content-Type": "text/html"});  
res.write(html);
res.write(req.url)
res.end();  
    
});
if(req.method==='POST'){
	
	fs.appendFile(archive.paths.list,encoding='utf8', function (err) {
});
}	

// fs.readFile(archive.paths.archivedSites+req.url, function (err, html) {    
// res.writeHeader(200, {"Content-Type": "text/html"});  
// res.write(html);  
// res.end();  
    
// });	
	//loadindex(req,res);

// 	if(req.url.split("?")){
//   loadsite(req,res,'www.google.com')
// }else{


// }
	// console.log(req.url)
	 //loadindex(req,res);

	
  //    loadindex(req,res);
 
  //     loadsite(req,res,'www.example.com')

  // // console.log(req.data);
  // //  var data = "";
 
  //   	loadsite(req,res,'www.example.com')
    
  //       request.on('data', function(chunk) {
  //           console.log('Received data:', chunk.toString());
  //           data += chunk.toString();
  //       });
  //       request.on('end', function() {
  //           console.log('Complete data:', data);
  //       });
  //   }

};




