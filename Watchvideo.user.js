// ==UserScript==
// @name         Watch_UCL_Videos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Yui
// @match        https://echo360.org.uk/lesson/*
// @match        https://moodle.ucl.ac.uk/mod/resource/*
// @icon         https://www.google.com/s2/favicons?domain=echo360.org.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var ttt=0

if (window.location.host == 'moodle.ucl.ac.uk'){
function rm(){
var videoElement = document.getElementsByClassName("vjs-tech")[0]
videoElement.currentTime -= 5
}
function rmk(){
var videoElement = document.getElementsByClassName("vjs-tech")[0]
videoElement.currentTime += 5
}
function rmkk(){
var videoElement = document.getElementsByClassName("vjs-tech")[0]
if(ttt==1){videoElement.pause();ttt=0}else{videoElement.play();ttt=1}
}
function tt()
{var a=document.getElementsByClassName("container")[0];
var a22=document.createElement("li");
a.appendChild(a22)
var a2kk=document.createElement("a");
a22.appendChild(a2kk)
a2kk.innerHTML='&nbsp&nbsp↓↓'
a2kk.id='biliguna1';a2kk.style.position = "fixed";a2kk.style.left = "0px";a2kk.style.top = "340px";a2kk.style.fontSize='40px';a2kk.style.opacity=.30
a2kk.onclick=rmkk
var a2k=document.createElement("a");
a22.appendChild(a2k)
a2k.innerHTML='&nbsp&nbsp←'
a2k.id='biligunak2';a2k.style.position = "fixed";a2k.style.left = "0px";a2k.style.top = "390px";a2k.style.fontSize='40px';a2k.style.opacity=.30
a2k.onclick=rm
var a2=document.createElement("a");
a22.appendChild(a2)
a2.innerHTML='&nbsp&nbsp→'
a2.id='biliguna3';a2.style.position = "fixed";a2.style.left = "0px";a2.style.top = "440px";a2.style.fontSize='40px';a2.style.opacity=.30
a2.onclick=rmk
}
setTimeout(tt,3000)}


if (window.location.host == 'echo360.org.uk'){
    //else{document.getElementsByClassName("screens")?.[0].addEventListener("click",(()=>{
    //    document.getElementsByClassName("play-btn")?.[0].click();
    //    }));
function rm(){
var videoElement = document.getElementById('Video 1')
videoElement.currentTime -= 5
}
function rmk(){
var videoElement = document.getElementById('Video 1')
videoElement.currentTime += 5
}
function rmkk(){
var videoElement = document.getElementById('Video 1')
if(ttt==1){videoElement.pause();ttt=0}else{videoElement.play();ttt=1}
}
function tt()
{var a=document.getElementsByClassName("screens")[0];
var a22=document.createElement("li");
a.appendChild(a22)
var a2kk=document.createElement("a");
a22.appendChild(a2kk)
a2kk.innerHTML='&nbsp&nbsp↓↓'
a2kk.id='biliguna1';a2kk.style.position = "fixed";a2kk.style.left = "0px";a2kk.style.top = "340px";a2kk.style.fontSize='40px';a2kk.style.opacity=1.0
a2kk.onclick=rmkk
var a2k=document.createElement("a");
a22.appendChild(a2k)
a2k.innerHTML='&nbsp&nbsp←'
a2k.id='biligunak2';a2k.style.position = "fixed";a2k.style.left = "0px";a2k.style.top = "390px";a2k.style.fontSize='40px';a2k.style.opacity=1.0
a2k.onclick=rm
var a2=document.createElement("a");
a22.appendChild(a2)
a2.innerHTML='&nbsp&nbsp→'
a2.id='biliguna3';a2.style.position = "fixed";a2.style.left = "0px";a2.style.top = "440px";a2.style.fontSize='40px';a2.style.opacity=1.0
a2.onclick=rmk
}
window.onload=function(){tt();console.log(2)}}
    //    setTimeout(tt,3000)}

//setTimeout(tt,3000)

})();
