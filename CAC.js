var cssId = 'css';  // you could encode the css path itself to generate id..
var width = screen.width;
        if (!document.getElementById(cssId))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            if(width < 480) {
                link.href = 'CACmobile.css';
            } else {
                link.href = 'CAC.css'
            }
            head.appendChild(link);
        }
function cah() {
    setTimeout(() => { document.getElementById('head').style.opacity = '1'; }, 1500);
    setTimeout(() => { document.getElementById('name').style.opacity = '1'; }, 2500);
    setTimeout(() => { document.getElementById('bar').style.opacity = '1'; }, 2700);
    setTimeout(() => { document.getElementById('start').style.opacity = '1'; }, 4500);
    setTimeout(() => { document.getElementById('multi').style.opacity = '1'; }, 4500);
}
function start() {
    setTimeout(() => { document.getElementById("bar").style = "opacity:0;transition:opacity 1s"; }, 500);
    document.getElementById('name').style = 'opacity:0;transition: opacity 1s;';
    document.getElementById('head').style = 'opacity:0;transition: opacity 1s;';
    document.getElementById('start').style = 'opacity:0;transition: opacity 0.5s;';
    document.getElementById('multi').style = 'opacity:0;transition: opacity 0.5s;';
    setTimeout(() => { document.getElementById('bar').style = "opacity:1;transition:opacity 10s;position:absolute;top:90%;" }, 4000);
    setTimeout(() => { document.getElementById('head').style.display = 'none'; }, 2000);
    setTimeout(() => { document.getElementById('name').style.display = 'none'; }, 2000);
    setTimeout(() => { document.getElementById('start').style.display = 'none'; }, 2000);
    setTimeout(() => { document.getElementById('multi').style.display = 'none'; }, 2000);
    document.getElementById('black').style = 'display:block;';
    document.getElementById('white').style = 'display:block;';
    document.getElementById('multi2').style = 'display:block;';
    setTimeout(() => { document.getElementById('black').style.opacity = '1'; }, 1000);
    setTimeout(() => { document.getElementById('white').style.opacity = '1'; }, 1000);
    setTimeout(() => { document.getElementById('multi2').style.opacity = '1'; }, 1000);
    setTimeout(() => { document.getElementById('multi2').style.transition = 'opacity 2s'; }, 1000);
}

function black() {
    var black = new XMLHttpRequest();
    black.open("GET", "https://raw.githubusercontent.com/Joshbv6/CAH/main/cards.json");
    black.send();
    black.onload = () => {
        console.log(black);
        if (black.status === 200) {
            let black_json = JSON.parse(black.response);
            console.log(JSON.parse(black.response));
            var random = Math.floor(Math.random() * 6308);
            var black_text = black_json.black[random];
            black_card = black_text.text;
            black_card = black_card.replace("_", " ___ ");
            console.log("[" + random + "] " + black_card + " picks: " + black_text.pick);
            var flip = new Audio('black.mp3');
            flip.play();
            document.getElementById("text").style.display = "block";
            document.getElementById("text").innerHTML = black_card;
            document.getElementById("text").style.color = "#FFF";
            document.getElementById("card").style.display = "block";
            document.getElementById("card").style.backgroundColor = "#000";
            document.getElementById("logo").style = "display:block;color:#fff;"
            document.getElementById("cah").style.display = "block";
            document.getElementById('card').style.opacity = '1';
            document.getElementById('logo').style.opacity = '1';
            document.getElementById('text').style.opacity = '1';
            document.getElementById("card").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 6308);
                var black_text = black_json.black[random];
                black_card = black_text.text;
                black_card = black_card.replace("_", " ___ ");
                document.getElementById("text").innerHTML = black_card;
                var audio = new Audio('swipe.mp3');
                audio.play();
            })
        } else {
            console.log(`error ${black.status} ${black.statusText}`);
        }
    }
}

function white() {
    var white = new XMLHttpRequest();
    white.open("GET", "https://raw.githubusercontent.com/Joshbv6/CAH/main/cards.json");
    white.send();
    white.onload = () => {
        console.log(white);
        if (white.status === 200) {
            let white_json = JSON.parse(white.response);
            console.log(JSON.parse(white.response));
            var random1 = Math.floor(Math.random() * 22441);
            var random2 = Math.floor(Math.random() * 22441);
            var random3 = Math.floor(Math.random() * 22441);
            var random4 = Math.floor(Math.random() * 22441);
            var white_text1 = white_json.white[random1];
            var white_text2 = white_json.white[random2];
            var white_text3 = white_json.white[random3];
            var white_text4 = white_json.white[random4];
            console.log("[" + random1 + "] " + white_text1);
            var newcards = new Audio('white.mp3');
            newcards.play();
            document.getElementById("cards").style.display = "block";
            document.getElementById("text1").style.display = "block";
            document.getElementById("text2").style.display = "block";
            document.getElementById("text3").style.display = "block";
            document.getElementById("text4").style.display = "block";
            document.getElementById("text1").innerHTML = white_text1;
            document.getElementById("text2").innerHTML = white_text2;
            document.getElementById("text3").innerHTML = white_text3;
            document.getElementById("text4").innerHTML = white_text4;
            document.getElementById("white1").style.backgroundColor = "#fff";
            document.getElementById("white2").style.backgroundColor = "#fff";
            document.getElementById("white3").style.backgroundColor = "#fff";
            document.getElementById("white4").style.backgroundColor = "#fff";
            document.getElementById("logo1").style = "display:block;"
            document.getElementById("logo2").style = "display:block;"
            document.getElementById("logo3").style = "display:block;"
            document.getElementById("logo4").style = "display:block;"
            document.getElementById("cah1").style.display = "block";
            document.getElementById("cah2").style.display = "block";
            document.getElementById("cah3").style.display = "block";
            document.getElementById("cah4").style.display = "block";
            document.getElementById("white").innerHTML = "New Cards"

            document.getElementById("white1").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text1").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
            document.getElementById("white2").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text2").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
            document.getElementById("white3").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text3").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
            document.getElementById("white4").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text4").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
        } else {
            console.log(`error ${white.status} ${white.statusText}`);
        }
    }
}
function multi() {
    document.getElementById('multi2').style.opacity = '0';
    document.getElementById('multi').style = 'opacity:0;transition: opacity 2s;';
    document.getElementById('head').style.opacity = '0';
    document.getElementById('name').style.opacity = '0';
    document.getElementById('start').style.opacity = '0';
    document.getElementById('card').style.opacity = '0';
    document.getElementById('cards').style.opacity = '0';
    document.getElementById('name').style.opacity = '0';
    document.getElementById('black').style.opacity = '0';
    document.getElementById('white').style.opacity = '0';

    setTimeout(() => { document.getElementById('head').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('name').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('start').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('multi').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('multi2').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('card').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('cards').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('name').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('black').style.display = 'none'; }, 3000);
    setTimeout(() => { document.getElementById('white').style.display = 'none'; }, 3000);

    document.getElementById('inst').innerHTML = instructions;

    document.getElementById('bcard').style.display = 'block';
    document.getElementById('wcard').style.display = 'block';
    document.getElementById('inst').style.display = 'block';
    setTimeout(() => { document.getElementById('bcard').style.opacity = '1'; }, 2500);
    setTimeout(() => { document.getElementById('wcard').style.opacity = '1'; }, 2500);
    setTimeout(() => { document.getElementById('inst').style.opacity = '1'; }, 1500);

}
function serverw() {
    setTimeout(() => { document.getElementById('bar').style = "opacity:1;transition:opacity 10s;position:absolute;bottom: 1.5%;" }, 4000);
    if(width < 1260 && width > 490){
        document.getElementById("cards").style = "left:33%";
    } else if (width < 490) {
        document.getElementById("cards").style = "left:4%";
    }else {document.getElementById("cards").style = "left:29%";}
    document.getElementById("multiwhite").style.display = "block";
    document.getElementById("multiwhite").style.opacity = "1";
    document.getElementById("cards").style.display = "block";
    document.getElementById("text1").style.display = "block";
    document.getElementById("text2").style.display = "block";
    document.getElementById("text3").style.display = "block";
    document.getElementById("text4").style.display = "block";
    document.getElementById("white1").style = "background-color:#fff";
    document.getElementById("white2").style.backgroundColor = "#fff";
    document.getElementById("white3").style.backgroundColor = "#fff";
    document.getElementById("white4").style.backgroundColor = "#fff";
    document.getElementById("logo1").style = "display:block;"
    document.getElementById("logo2").style = "display:block;"
    document.getElementById("logo3").style = "display:block;"
    document.getElementById("logo4").style = "display:block;"
    document.getElementById("cah1").style.display = "block";
    document.getElementById("cah2").style.display = "block";
    document.getElementById("cah3").style.display = "block";
    document.getElementById("cah4").style.display = "block";
    document.getElementById("multiwhite").innerHTML = "Get cards";
    document.getElementById('multi2white').style = 'display:block;';
    setTimeout(() => { document.getElementById('multi2white').style.opacity = '1'; }, 1000);
    setTimeout(() => { document.getElementById('multi2white').style.transition = 'opacity 2s'; }, 1000);
}
function serverb() {
    setTimeout(() => { document.getElementById('bar').style = "opacity:1;transition:opacity 10s;position:absolute;bottom: 1.5%;" }, 4000);
    document.getElementById("text").style.display = "block";
    document.getElementById("text").style= "font-size:20px;";
    document.getElementById("text").style.color = "#FFF";
    document.getElementById("card").style.display = "block";
    document.getElementById("card").style.backgroundColor = "#000";
    document.getElementById("logo").style = "display:block;color:#fff;"
    document.getElementById("cah").style.display = "block";
    document.getElementById('card').style.opacity = '1';
    document.getElementById('logo').style.opacity = '1';
    document.getElementById('text').style.opacity = '1';
    if(width < 1260 && width > 490) {
        document.getElementById("card").style.left="38.5%";
    } else if (width < 490) {
        document.getElementById("card").style.left="12.5%";
    } else {document.getElementById("card").style.left="37.5%";}
    document.getElementById("multiblack").style.display = "block";
    document.getElementById("multiblack").style.opacity = "1";
    document.getElementById("multiblack").innerHTML = "Get card";
    document.getElementById('multi2white').style = 'display:block;';
    setTimeout(() => { document.getElementById('multi2white').style.opacity = '1'; }, 1000);
    setTimeout(() => { document.getElementById('multi2white').style.transition = 'opacity 2s'; }, 1000);
}
function multiwhite() {
    var white = new XMLHttpRequest();
    white.open("GET", "https://raw.githubusercontent.com/Joshbv6/CAH/main/cards.json");
    white.send();
    white.onload = () => {
        console.log(white);
        if (white.status === 200) {
            let white_json = JSON.parse(white.response);
            console.log(JSON.parse(white.response));
            var random1 = Math.floor(Math.random() * 22441);
            var random2 = Math.floor(Math.random() * 22441);
            var random3 = Math.floor(Math.random() * 22441);
            var random4 = Math.floor(Math.random() * 22441);
            var white_text1 = white_json.white[random1];
            var white_text2 = white_json.white[random2];
            var white_text3 = white_json.white[random3];
            var white_text4 = white_json.white[random4];
            console.log("[" + random1 + "] " + white_text1);
            var newcards = new Audio('white.mp3');
            newcards.play();
            document.getElementById("cards").style.display = "block";
            document.getElementById("text1").style.display = "block";
            document.getElementById("text2").style.display = "block";
            document.getElementById("text3").style.display = "block";
            document.getElementById("text4").style.display = "block";
            document.getElementById("text1").innerHTML = white_text1;
            document.getElementById("text2").innerHTML = white_text2;
            document.getElementById("text3").innerHTML = white_text3;
            document.getElementById("text4").innerHTML = white_text4;
            document.getElementById("white1").style.backgroundColor = "#fff";
            document.getElementById("white2").style.backgroundColor = "#fff";
            document.getElementById("white3").style.backgroundColor = "#fff";
            document.getElementById("white4").style.backgroundColor = "#fff";
            document.getElementById("logo1").style = "display:block;"
            document.getElementById("logo2").style = "display:block;"
            document.getElementById("logo3").style = "display:block;"
            document.getElementById("logo4").style = "display:block;"
            document.getElementById("cah1").style.display = "block";
            document.getElementById("cah2").style.display = "block";
            document.getElementById("cah3").style.display = "block";
            document.getElementById("cah4").style.display = "block";
            document.getElementById("multiwhite").innerHTML = "New Cards"

            document.getElementById("white1").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text1").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
            document.getElementById("white2").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text2").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
            document.getElementById("white3").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text3").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
            document.getElementById("white4").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 22441);
                document.getElementById("text4").innerHTML = white_json.white[random];
                var audio = new Audio('swipe.mp3');
                audio.play();
            });
        } else {
            console.log(`error ${white.status} ${white.statusText}`);
        }
    }
}
function multiblack() {
    var black = new XMLHttpRequest();
    black.open("GET", "https://raw.githubusercontent.com/Joshbv6/CAH/main/cards.json");
    black.send();
    black.onload = () => {
        console.log(black);
        if (black.status === 200) {
            let black_json = JSON.parse(black.response);
            console.log(JSON.parse(black.response));
            var random = Math.floor(Math.random() * 6308);
            var black_text = black_json.black[random];
            black_card = black_text.text;
            black_card = black_card.replace("_", " ___ ");
            console.log("[" + random + "] " + black_card + " picks: " + black_text.pick);
            var flip = new Audio('black.mp3');
            flip.play();
            document.getElementById("text").style.display = "block";
            document.getElementById("text").innerHTML = black_card;
            document.getElementById("text").style.color = "#FFF";
            document.getElementById("card").style.display = "block";
            document.getElementById("card").style.backgroundColor = "#000";
            document.getElementById("logo").style = "display:block;color:#fff;"
            document.getElementById("cah").style.display = "block";
            document.getElementById('card').style.opacity = '1';
            document.getElementById('logo').style.opacity = '1';
            document.getElementById('text').style.opacity = '1';
            document.getElementById("multiblack").innerHTML="New Card"
            document.getElementById("card").addEventListener("click", function () {
                var random = Math.floor(Math.random() * 6308);
                var black_text = black_json.black[random];
                black_card = black_text.text;
                black_card = black_card.replace("_", " ___ ");
                document.getElementById("text").innerHTML = black_card;
                var audio = new Audio('swipe.mp3');
                audio.play();
            })
        } else {
            console.log(`error ${black.status} ${black.statusText}`);
        }
    }
}
const instructions = "To play this game with some friends, one of you has to pick the black card. This will generate a random black card, and your friends have to choose the white card. (Don't worry, you can change roles later on the game)<br>The player who chose the black card will read out loud the card, and the player that chose the white cards will have random cards and they will have to choose which one on their cards adapts better to the text on the black card.<br>Once they choose and tell out loud aswell their answer, the one with the black card will vote which answer was funnier, so the one who told that answe takes a point, the one wit more points win the game but...you choose your rules, really <br> When the round is over, the players with white cards click te cards that were chosen and new ones will be given to you, same with the black card. <br>You will have the option to change roles if you want."