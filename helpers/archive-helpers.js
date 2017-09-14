var fs = require('fs');
var path = require('path');
var _ = require('underscore');


/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt'),
  urls: path.join(__dirname, '../web/archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {

fs.readFile(this.paths.urls, function (err, data) {       
var result = data.toString().split("\n")
if(callback)
	callback(result)
});
// var readStream = fs.createReadStream(this.paths.urls, 'utf8');

// var data = '';

// readStream.on('data', function(chunk) {
//     data+=chunk;
// });

// readStream.on('end', function() {
//     console.log(data);
// });
 
};

exports.isUrlInList = function(url, callback) {
	exports.readListOfUrls(function(data){
		var exixst=_.any(sites,function(site,i){
			return site.match(url)
		})
	callback(exixst);
	});
};

exports.addUrlToList = function(url, callback) {
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
// exports.collectData=function(request,callback){
//   var data="";
//   request.on('data',function(chunk){
//     data+=chunk;
//   });
//   request.on('end',function(){
//    callback(JSON.parse(data));
//   });

// };