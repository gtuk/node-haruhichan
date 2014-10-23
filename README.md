node-haruhichan
=================

node-haruhichan is a node module for searching anime torrents from haruhichan.

## Installation

From npm:

	npm install node-haruhichan

From source:

	git clone https://github.com/gtuk/node-haruhichan.git
	npm link


## Usage

``` javascript
var haruhichan = require("../");
haruhichan.searchAnimes('0', 'TV', 'rank', 'asc', '', 'Hunter', '50', function(result){
    console.log(result);
});
```

Parameters (order is important):
page = 0 -
type = TV, Movie
sort = rank, popularity
order = asc, desc
genre = Action, Adventure, Cars, Comedy, Dementia, Demons, Drama, Ecchi, Fantasy, Game, Harem, Historical, Horror, Josei, Kids, Magic, Martial Arts, Mecha, Military, Music, Mystery, Parody, Police, Psychological, Romance, Samurai, School, Sci-Fi, Seinen, Shoujo, Shoujo Ai, Shounen, Shounen Ai, Slice of Life, Space, Sports, Super Power, Supernatural, Thriller, Vampire
keywords =
limit = 1 -

For more examples see examples folder