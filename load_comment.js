javascript:!function(){ var comment = prompt("Hãy nhập số bình luận bài đăng đang có"); var second = prompt("Hãy nhập số giây mà 1 lần click load"); function doIt(){ var button = document.getElementsByClassName(" _4ssp"); button[0].click(); second++; } var get_comment = setInterval(function(){doIt();},second*1000); setTimeout(function(){ clearInterval(get_comment); alert("Đợi tí!"); }, comment/50*second*1000); }();
