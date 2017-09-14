var path = require('path');
var url=require('url');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var http = require('http')
var fs = require('fs');
var httpHelpers = require("./http-helpers.js")

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
// 	status = 200
// if (req.url ==="/arglebargle") {
// status = 404
// }
if(req.method==='GET'){
fs.readFile(archive.paths.siteAssets+'/index.html', function (err, html) {       
res.writeHeader(status, {"Content-Type": "text/html"});  
res.write(html);
res.write(req.url)
res.end();
    
});

	

}
if(req.method==='POST'){

var data="";
  req.on('data',function(chunk){
    data+=chunk;
    var d =data.split('=')[1];
    //  console.log(archive.paths.siteAssets,"========siteAssets=====>");
    // console.log(archive.paths.archivedSites,"========archivedSites=========>");
    // console.log(archive.paths.list,"=========list============>");

    archive.isUrlInList(d,function(found){
    	if(found){
    		archive.isUrlArchived(url,function(exists){
    			if (exists) {
    				httpHelpers.sendRedirect(res,"/"+d)
    			}
    		})
    	}else {
    		archive.assUrlToList(d,function(){
    			httpHelpers.sendRedirect(res,"/loading.html")
    		})

    	}

    })
    fs .appendFile(archive.paths.urls, d+"\n" , function (err) { 
    	
    
    if (err)
        console.log(err);
    else{
        console.log('Append operation complete.');
        res.writeHeader(302, {"Content-Type": "text/html"}); 
        res.end();
    }
    

});
   });

  
	
}	
archive.readListOfUrls()
//   		fs.write(archive.paths.list, 'data to append', function (err) {
//         if (err) throw err;
//         console.log('Saved!');
// });
//   //req.end();
// fs.open(archive.paths.list, 'w', (err, fd) => {

// });
    // var file = fs.openSync("/Users/rbk7/Desktop/" + '/sites.txt', 'w');

   // fs.closeSync(file);

// 	console.log(url,'this is me');
// 		fs.appendFile(archive.paths.list,url, function (err) {
// 		res.end();

// })
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




