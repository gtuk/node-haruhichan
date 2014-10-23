var request = require('request');

var URL = 'http://ptp.haruhichan.com/';

function searchAnimes(page, type, sort, order, genre, keywords, limit, callback) {
    var url = URL+'list.php?'+'page='+page+'&type='+type+'&sort='+sort+'&order='+order+'&search='+keywords+'&genres='+genre+'&limit='+limit;
    request({url:url, json: true}, function(error, response, data){
        if (error || response.statusCode >= 400) {
            callback(error);
        }
        else if (!data || (data.error && data.error !== 'No data returned')) {
            callback('No data returned');

        }
        else {
            callback(data);
        }
    })
}

function getAnime(id, callback) {
    var url = URL+'anime.php?'+'id='+id;
    request({url:url, json: true}, function(error, response, data){
        if (error || response.statusCode >= 400) {
            callback(error);
        }
        else if (!data || (data.error && data.error !== 'No data returned')) {
            callback('No data returned');

        }
        else {
            callback(data);
        }
    })
}

exports.searchAnimes = searchAnimes;
exports.getAnime = getAnime;
