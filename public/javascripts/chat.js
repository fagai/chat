$(function(){
  var socket = io.connect('http://localhost/');

  //接続確認
  socket.on('connect',function(){
    console.log('connected.');
  });

  //メッセージを送信
  $('#comment_form').on('submit',function(){
    var msg = $('#comment').val();
    socket.emit('msg post', msg);
    //コメント欄の初期化
    $('#comment').val('');
  });

  //メッセージを受信
  socket.on('msg push', function(msg){
    $('#list').prepend($("<dt>" + new Date() + "</dt><dd>" + msg + "</dd>"));
  });

});