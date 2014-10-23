var haruhichan = require("../");

haruhichan.searchAnimes('0', 'TV', 'rank', 'asc', '', 'Hunter', '50', function(result){
    console.log(result);
});