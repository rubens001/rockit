exports.get=function(req,res,next) {
	var songs = [];
  songs.push({
  "singer": "A RÁDIO ROCK",
  "song": "Viva o Rock",
  "bio": "",
  "cover": "http://player.radiorock.com.br/v2/images/album/album.jpg",
  "covermega": "http://player.radiorock.com.br/v2/images/album/album.jpg",
  "background": "http://player.radiorock.com.br/v2/background89/897.jpg",
  "lyrics": false
  });
  songs.push({
  "singer": "U2",
  "song": "Rock U",
  "bio": "",
  "cover": "http://player.radiorock.com.br/v2/images/album/album.jpg",
  "covermega": "http://player.radiorock.com.br/v2/images/album/album.jpg",
  "background": "http://player.radiorock.com.br/v2/background89/897.jpg",
  "lyrics": "I will rock U"
  });
	res.json(songs);
};

exports.post=function(req,res,next) {
  var body=req.body;
  var url=req.url;
  var pathParam = req.params.radioId;
  var param2 = req.param('p2');
  res.json({url:url,pathParam:pathParam,p2:param2,body:body});
};