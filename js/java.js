
  images ={
    1 : "https://c4.wallpaperflare.com/wallpaper/146/872/985/baby-groot-groot-5k-hd-wallpaper-preview.jpg",
    2 : "https://c4.wallpaperflare.com/wallpaper/128/887/619/spider-man-marvel-comics-comics-spider-wallpaper-preview.jpg",
    3 : "https://c4.wallpaperflare.com/wallpaper/107/848/913/spiderman-ps4-spiderman-games-hd-wallpaper-preview.jpg",
    4 : "https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg",
    5 : "https://c4.wallpaperflare.com/wallpaper/228/684/1/video-games-spider-man-2018-spider-man-marvel-comics-wallpaper-preview.jpg",
    6 : "https://c4.wallpaperflare.com/wallpaper/436/819/753/jared-leto-joker-hd-4k-wallpaper-preview.jpg",
    7 : "https://c4.wallpaperflare.com/wallpaper/576/838/565/spiderman-4k-artwork-hd-wallpaper-preview.jpg",
    8 : "https://c4.wallpaperflare.com/wallpaper/375/342/535/thor-chris-hemsworth-men-mjolnir-wallpaper-preview.jpg",
    9 : "https://c4.wallpaperflare.com/wallpaper/1017/584/846/avengers-age-of-ultron-the-avengers-thor-hulk-wallpaper-preview.jpg",
    10 : "https://c4.wallpaperflare.com/wallpaper/266/615/627/movies-deadpool-superhero-wallpaper-preview.jpg"  
}
function play(x){ w =document.querySelector(`${x}`).play() }
function pause(x){ w =document.querySelector(`${x}`).pause() }
f=0
$("button").on("click" , function(x){  
    if ($(".name").val() !== "" && $(".name").val() !== " " && $(".age").val() !== ""  ){
    $($(".info")).append(`<span>${$(".name").val()}</span>`);
    play(".game")
    $(".landing").slideUp(500) 
    x= Number.parseInt( $("select").val()) ; // number of elements gonna be
    n=0
    for (i=0 ; i<x ; i++ ){
        n>=(x/2)? n=1 :n++ ; // number looping in object images
        $(`<div class='son'><div class='front'></div> <div class='back'><img src=${images[n]} alt=''></div></div>`).appendTo(".area"); //appending the element contains img
        $(".son").eq(i).css({order:`${Number.parseInt(Math.random()*x)}`}) // shuffle
}}})
    y=0
    $(".area").on("click", ".son", function(){
    $(this).addClass("flipped")
    y++
    if(y === 2 && $(".flipped img")[0].src === $(".flipped img")[1].src ){  //if two pic are identical 
    $(".flipped").eq(1).addClass("good") ;
    $(".flipped").eq(0).addClass("good");
    $(".flipped").eq(1).removeClass("flipped") ;
    $(".flipped").eq(0).removeClass("flipped");
    f+=100
    $(".score").text(`${f}`)
    pause(".game");
    play(".medhat");
    setTimeout(function (){
    play(".game")
},3000)
    y=0;







    if($(".good").length === Number.parseInt( $("select").val()) ){ // if the game is finished
    $(".medhat").remove() ;
    $(".game").remove() ;
    play(".mayo") ;
    localStorage.a = $(".name").val() ;
    localStorage.b = f ;
    $(".final").append(`<span>${f}</span>`);
    
    
    setTimeout(()=>{
        $(".playGround").slideUp(500)
    },2000)


}}




else if (y === 2 && $(".flipped img")[0].src !== $(".flipped img")[1].src ){   // if two pic are not identical 
    f-=10
    $(".score").text(`${f}`)
setTimeout(function(){
    $(".flipped").eq(1).removeClass("flipped") ;
    $(".flipped").eq(0).removeClass("flipped")
}, 1000)
    y=0 ;
}})
$(".refresh").on("click", function(){location.href = `https://distracted-kowalevski-6355c4.netlify.app/`})



let min = 3
let sec = 0
    timer = setInterval(()=>{
        let time = `${min}:${sec.toString().length  ===  2 ? sec : "0"+sec }`
        $(".timer span span ").text( time);
        sec == 0 ? min-- : ""
        sec == 0 ? sec = 59 : sec--
        min == -1 ? clearInterval(timer) :""
    },1000)







