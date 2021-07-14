'use strict';

var baseURL = 'http://www.disrupt-it.nl';
var scraper = require('website-scraper');

scraper.scrape({
  urls: [
    baseURL,	// Will be saved with default filename 'index.html' 
    {url: baseURL + '/speakers', filename: 'speakers.html'},
    {url: baseURL + '/partners', filename: 'partners/index.html'},
    {url: baseURL + '/location', filename: 'location.html'},
    {url: baseURL + '/organisation', filename: 'organisation.html'},
    {url: baseURL + '/speakers', filename: 'speakers.html'},
    {url: baseURL + '/partners/nedap', filename: 'partners/nedap.html'},
    {url: baseURL + '/partners/KPMG', filename: 'partners/KPMG.html'},
    {url: baseURL + '/partners/topicus', filename: 'partners/topicus.html'},
    {url: baseURL + '/partners/achmea', filename: 'partners/achmea.html'},
  ],
  directory: './scraped',
  subdirectories: [
    {directory: 'img', extensions: ['.jpg', '.png', '.svg']},
    {directory: 'js', extensions: ['.js']},
    {directory: 'css', extensions: ['.css']}
  ],
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'}
  ],
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
    }
  }
}).then(function (result) {
  console.log(result);
}).catch(function(err){
  console.log(err);
});