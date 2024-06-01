$(function(){
  $(window).on('scroll',()=>{
    console.log('スクロールイベントが発生しました');
  });
});
$(window).on("load", () => {
  console.log("loadイベントが発生しました");
});