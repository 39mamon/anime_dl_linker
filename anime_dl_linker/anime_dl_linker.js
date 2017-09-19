var client = require('cheerio-httpcli');
 
// Googleで「node.js」について検索する。 
var word = 'node.js';
 
client.fetch('http://www.google.com/search', { q: word }, function (err, $, res, body) {
  // レスポンスヘッダを参照 
  console.log(res.headers);
 
  // HTMLタイトルを表示 
  console.log($('title').text());
 
  // リンク一覧を表示 
  let i = 0;
  $('a').each(function (idx) {
    console.log(++i + "回目");
    console.log($(this).attr('href'));
    console.log("---------------------------");

    client.fetch($(this).attr('href'), function (err, $2, res, body) {
        console.log($2('title').text());
    });
  });
});