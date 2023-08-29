var cc=["red","green","blue","yellow"];
var cp=[]
var ucp=[]
function rg(){
    var rd=Math.floor((Math.random()*(4)))
    var rc=cc[rd]
    cp.push(rc)
    $("#"+rc).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(rc)
    level++;
    $("h1").text("Level "+level)
    
}

    $(".btn").click(function(){
        var e=$(this).attr("id")
        ucp.push(e)
        animatepress(e)
        playsound(e)
        if(ucp.length==level){checkanswer();}


    })

function playsound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();


}
function animatepress(cc){
    $("#"+cc).addClass("pressed")
    setTimeout(function(){
        $("#"+cc).removeClass("pressed")
    },100)
}
var c=0;
var level=0;
$(document).keypress(function(event){
    if(c===0){
        c++
        rg();
    }
    
})
function checkanswer(){
    if(JSON.stringify(cp)===JSON.stringify(ucp)){
        ucp=[];
        
        setTimeout(function(){rg();},1000)

    }
    else{
        // c=0;
        gameover();
        

    }
    
}
function gameover(){
    var audio=new Audio("./sounds/wrong.mp3")
    audio.play()
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
    },200)
    $("h1").text("Game Over , press any key to restart")
    startover()
}
function startover(){
    cp=[]
    ucp=[]
    level=0;
    c=0;
}