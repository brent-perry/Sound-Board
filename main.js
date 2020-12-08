"use strict"

var mainSound = new Audio('board_sounds/superbros_theme.mp3');
//lower case
var keyLowerZ = new Audio('board_sounds/bomb.mp3');
var keyLowerX = new Audio('board_sounds/button.mp3');
var keyLowerC = new Audio('board_sounds/byebye.mp3');
var keyLowerV = new Audio('board_sounds/car_alarm.mp3');
var keyLowerB = new Audio('board_sounds/cat_scream.mp3');
var keyLowerN = new Audio('board_sounds/cha_ching.mp3');
var keyLowerM = new Audio('board_sounds/classic_ricochet.mp3');
var keyLowerA = new Audio('board_sounds/computer_error.mp3');
var keyLowerQ = new Audio('board_sounds/desk_bell.mp3');
var keyLowerW = new Audio('board_sounds/drawer.mp3');
var keyLowerS = new Audio('board_sounds/yes_sound.mp3');
var keyLowerE = new Audio('board_sounds/fart.mp3');
var keyLowerD = new Audio('board_sounds/giant.mp3');
var keyLowerR = new Audio('board_sounds/glock.mp3');
var keyLowerF = new Audio('board_sounds/hawk.mp3');
var keyLowerT = new Audio('board_sounds/hello.mp3');
var keyLowerG = new Audio('board_sounds/ice_cubes.mp3');
var keyLowerY = new Audio('board_sounds/magnum.mp3');
var keyLowerH = new Audio('board_sounds/metal_drop.mp3');
var keyLowerU = new Audio('board_sounds/metal_pong.mp3');
var keyLowerJ = new Audio('board_sounds/morse_code.mp3');
var keyLowerI = new Audio('board_sounds/red_alert.mp3');
var keyLowerK = new Audio('board_sounds/sweep.mp3');
var keyLowerO = new Audio('board_sounds/thow_knife.mp3');
var keyLowerL = new Audio('board_sounds/water_drop.mp3');
var keyLowerP = new Audio('board_sounds/windows_error.mp3');

// //upper case
// var keyZ = new Audio('board_sounds/yes_sound.mp3');
// var keyX = new Audio('board_sounds/');
// var keyC = new Audio('board_sounds/');
// var keyV = new Audio('board_sounds/');
// var keyB = new Audio('board_sounds/');
// var keyN = new Audio('board_sounds/');
// var keyM = new Audio('board_sounds/');
// var keyA = new Audio('board_sounds/');
// var keyQ = new Audio('board_sounds/');
// var keyW = new Audio('board_sounds/');
// var keyS = new Audio('board_sounds/');
// var keyE = new Audio('board_sounds/');
// var keyD = new Audio('board_sounds/');
// var keyR = new Audio('board_sounds/');
// var keyF = new Audio('board_sounds/');
// var keyT = new Audio('board_sounds/');
// var keyG = new Audio('board_sounds/');
// var keyY = new Audio('board_sounds/');
// var keyH = new Audio('board_sounds/');
// var keyU = new Audio('board_sounds/');
// var keyJ = new Audio('board_sounds/');
// var keyI = new Audio('board_sounds/');
// var keyK = new Audio('board_sounds/');
// var keyO = new Audio('board_sounds/');
// var keyL = new Audio('board_sounds/');
// var keyP = new Audio('board_sounds/');


function play_and_stop(audio)
    {
    audio.play();
    if (audio._timer)
        clearTimeout(audio._timer);
    audio._timer = setTimeout(function()
        {
        audio.pause();
        audio.currentTime = 0;
        },1000);
    }

var keyhandler = function(event)
    {
    console.log(event);
    var is_key_down = false;
    var is_key_press = false;
    var is_key_up = false;
    if (event.type === "keydown")
        is_key_down = true;
    if (event.type === "keyup")
        is_key_up = true;
    if (event.type === "keypress")
        is_key_press = true;
        
    switch(event.key)
        {
        //MAIN SONG BUTTON
        case ' ':
        if (is_key_down)
            mainSound.play();
        if (is_key_press)
            document.getElementById('main_sound').style.display = "none";
        break;
        //LOWER CASE
        case 'z':
        if (is_key_down)
            play_and_stop(keyLowerZ);
        if (is_key_press)
            document.getElementById('lz').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lz').style.opacity = "";
        break;

        case 'x':
        if (is_key_down)
            play_and_stop(keyLowerX);
        if (is_key_press)
            document.getElementById('lx').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lx').style.opacity = "";
        break;

        case 'c':
        if (is_key_down)
            play_and_stop(keyLowerC);
        if (is_key_press)
            document.getElementById('lc').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lc').style.opacity = "";
        break;

        case 'v': 
        if (is_key_down)
            play_and_stop(keyLowerV);
        if (is_key_press)
            document.getElementById('lv').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lv').style.opacity = "";
        break;

        case 'b':
        if (is_key_down)
            play_and_stop(keyLowerB);
        if (is_key_press)
            document.getElementById('lb').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lb').style.opacity = "";
        break;

        case 'n':
        if (is_key_down)
            play_and_stop(keyLowerN);
        if (is_key_press)
            document.getElementById('ln').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('ln').style.opacity = "";
        break;

        case 'm':
        if (is_key_down)
            play_and_stop(keyLowerM);
        if (is_key_press)
            document.getElementById('lm').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lm').style.opacity = "";
        break;
        
        case 'q':
        if (is_key_down)
            play_and_stop(keyLowerQ);
        if (is_key_press)
            document.getElementById('lq').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lq').style.opacity = "";
        break;

        case 'a':
        if (is_key_down)
            play_and_stop(keyLowerA);
        if (is_key_press)
            document.getElementById('la').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('la').style.opacity = "";
        break;
        
        case 'w':
        if (is_key_down)
            play_and_stop(keyLowerW);
        if (is_key_press)
            document.getElementById('lw').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lw').style.opacity = "";
        break;

        case 's':
        if (is_key_down)
            play_and_stop(keyLowerS);
        if (is_key_press)
            document.getElementById('ls').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('ls').style.opacity = "";
        break;

        case 'e':
        if (is_key_down)
            play_and_stop(keyLowerE);
        if (is_key_press)
            document.getElementById('le').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('le').style.opacity = "";
        break;

        case 'd':
        if (is_key_down)
            play_and_stop(keyLowerD);
        if (is_key_press)
            document.getElementById('ld').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('ld').style.opacity = "";
        break;

        case 'r':
        if (is_key_down)
            play_and_stop(keyLowerR);
        if (is_key_press)
            document.getElementById('lr').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lr').style.opacity = "";
        break;

        case 'f':
        if (is_key_down)
            play_and_stop(keyLowerF);
        if (is_key_press)
            document.getElementById('lf').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lf').style.opacity = "";
        break;

        case 't':
        if (is_key_down)
            play_and_stop(keyLowerT);
        if (is_key_press)
            document.getElementById('lt').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lt').style.opacity = "";
        break;

        case 'g':
        if (is_key_down)
            play_and_stop(keyLowerG);
        if (is_key_press)
            document.getElementById('lg').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lg').style.opacity = "";
        break;

        case 'y':
        if (is_key_down)
            play_and_stop(keyLowerY);
        if (is_key_press)
            document.getElementById('ly').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('ly').style.opacity = "";
        break;

        case 'h':
        if (is_key_down)
            play_and_stop(keyLowerH);
        if (is_key_press)
            document.getElementById('lh').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lh').style.opacity = "";
        break;

        case 'u':
        if (is_key_down)
            play_and_stop(keyLowerU);
        if (is_key_press)
            document.getElementById('lu').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lu').style.opacity = "";
        break;
        
        case 'j':
        if (is_key_down)
            play_and_stop(keyLowerJ);
        if (is_key_press)
            document.getElementById('lj').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lj').style.opacity = "";
        break;

        case 'i':
        if (is_key_down)
            play_and_stop(keyLowerI);
        if (is_key_press)
            document.getElementById('li').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('li').style.opacity = "";
        break;

        case 'k':
        if (is_key_down)
            play_and_stop(keyLowerK);
        if (is_key_press)
            document.getElementById('lk').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lk').style.opacity = "";
        break;

        case 'o':
        if (is_key_down)
            play_and_stop(keyLowerO);
        if (is_key_press)
            document.getElementById('lo').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lo').style.opacity = "";
        break;

        case 'l':
        if (is_key_down)
            play_and_stop(keyLowerL);
        if (is_key_press)
            document.getElementById('ll').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('ll').style.opacity = "";
        break;
        
        case 'p':
        if (is_key_down)
            play_and_stop(keyLowerP);
        if (is_key_press)
            document.getElementById('lp').style.opacity = "0.5";
        if (is_key_up)
            document.getElementById('lp').style.opacity = "";
        break;
        
        // //UPPERCASE

        // case 'Z':
        // if (is_key_down)
        //     play_and_stop(keyZ);
        // if (is_key_press)
        //     document.getElementById('z').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('z').style.opacity = "";
        // break;

        // case 'X': 
        // if (is_key_down)
        //     play_and_stop(keyX);
        // if (is_key_press)
        //     document.getElementById('x').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('x').style.opacity = "";
        // break;

        // case 'C': 
        // if (is_key_down)
        //     play_and_stop(keyC);
        // if (is_key_press)
        //     document.getElementById('c').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('c').style.opacity = "";
        // break;

        // case 'V': 
        // if (is_key_down)
        //     play_and_stop(keyV);
        // if (is_key_press)
        //     document.getElementById('v').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('v').style.opacity = "";
        // break;

        // case 'B': 
        // if (is_key_down)
        //     play_and_stop(keyB);
        // if (is_key_press)
        //     document.getElementById('b').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('b').style.opacity = "";
        // break;

        // case 'N': 
        // if (is_key_down)
        //     play_and_stop(keyN);
        // if (is_key_press)
        //     document.getElementById('n').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('n').style.opacity = "";
        // break;

        // case 'M': 
        // if (is_key_down)
        //     play_and_stop(keyM);
        // if (is_key_press)
        //     document.getElementById('m').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('m').style.opacity = "";
        // break;

        // case 'A': 
        // if (is_key_down)
        //     play_and_stop(keyA);
        // if (is_key_press)
        //     document.getElementById('a').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('a').style.opacity = "";
        // break;

        // case 'Q':
        // if (is_key_down)
        //     play_and_stop(keyQ);
        // if (is_key_press)
        //     document.getElementById('q').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('q').style.opacity = "";
        // break;

        // case 'W':
        // if (is_key_down)
        //     play_and_stop(keyW);
        // if (is_key_press)
        //     document.getElementById('w').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('w').style.opacity = "";
        // break;

        // case 'S':
        // if (is_key_down)
        //     play_and_stop(keyS);
        // if (is_key_press)
        //     document.getElementById('s').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('s').style.opacity = "";
        // break;

        // case 'E':
        // if (is_key_down)
        //     play_and_stop(keyE);
        // if (is_key_press)
        //     document.getElementById('e').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('e').style.opacity = "";
        // break;

        // case 'D':
        // if (is_key_down)
        //     play_and_stop(keyD);
        // if (is_key_press)
        //     document.getElementById('d').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('d').style.opacity = "";
        // break;

        // case 'R':
        // if (is_key_down)
        //     play_and_stop(keyR);
        // if (is_key_press)
        //     document.getElementById('r').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('r').style.opacity = "";
        // break;

        // case 'F':
        // if (is_key_down)
        //     play_and_stop(keyF);
        // if (is_key_press)
        //     document.getElementById('f').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('f').style.opacity = "";
        // break;

        // case 'T':
        // if (is_key_down)
        //     play_and_stop(keyT);
        // if (is_key_press)
        //     document.getElementById('t').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('t').style.opacity = "";
        // break;

        // case 'G':
        // if (is_key_down)
        //     play_and_stop(keyG);
        // if (is_key_press)
        //     document.getElementById('g').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('g').style.opacity = "";
        // break;

        // case 'Y':
        // if (is_key_down)
        //     play_and_stop(keyY);
        // if (is_key_press)
        //     document.getElementById('y').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('y').style.opacity = "";
        // break;

        // case 'H':
        // if (is_key_down)
        //     play_and_stop(keyH);
        // if (is_key_press)
        //     document.getElementById('h').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('h').style.opacity = "";
        // break;

        // case 'U':
        // if (is_key_down)
        //     play_and_stop(keyU);
        // if (is_key_press)
        //     document.getElementById('u').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('u').style.opacity = "";
        // break;

        // case 'J':
        // if (is_key_down)
        //     play_and_stop(keyJ);
        // if (is_key_press)
        //     document.getElementById('j').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('j').style.opacity = "";
        // break;

        // case 'I':
        // if (is_key_down)
        //     play_and_stop(keyI);
        // if (is_key_press)
        //     document.getElementById('i').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('i').style.opacity = "";
        // break;

        // case 'K':
        // if (is_key_down)
        //     play_and_stop(keyK);
        // if (is_key_press)
        //     document.getElementById('k').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('k').style.opacity = "";
        // break;

        // case 'O':
        // if (is_key_down)
        //     play_and_stop(keyO);
        // if (is_key_press)
        //     document.getElementById('o').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('o').style.opacity = "";
        // break;

        // case 'L':
        // if (is_key_down)
        //     play_and_stop(keyL);
        // if (is_key_press)
        //     document.getElementById('l').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('l').style.opacity = "";
        // break;

        // case 'P':
        // if (is_key_down)
        //     play_and_stop(keyP);
        // if (is_key_press)
        //     document.getElementById('p').style.opacity = "0.5";
        // if (is_key_up)
        //     document.getElementById('p').style.opacity = "";
        // break;
        }
    };

document.addEventListener('keydown',keyhandler);
document.addEventListener('keypress',keyhandler);
document.addEventListener('keyup',keyhandler);
