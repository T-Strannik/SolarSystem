
var L1 = 0;
var L2 = 210;
var L3 = 60;
var L4 = 90;
var L5 = 270;
var L6 = 150;
var L7 = 330;
var L8 = 30; //угол 
var L9 = 0;

console.log(document.getElementById('sun').offsetTop+72);
console.log(document.getElementById('sun').offsetLeft+72);

var x = document.getElementById('sun').offsetLeft+72;
var y = document.getElementById('sun').offsetTop+72;

var x_earth = document.getElementById('earth').offsetLeft+10;
var y_earth = document.getElementById('earth').offsetTop+10;
console.log(x_earth, y_earth);

setInterval(function(){//меркурий
	L1+=1;
	var R = 110; //радиус вращения
	var mercuriy = document.getElementById('mercuriy');
	mercuriy.style.top = R*Math.sin(L1*Math.PI/180)+y+'px';
	mercuriy.style.left = R*Math.cos(L1*Math.PI/180)+x+'px';
}, 30);

setInterval(function(){//венера
	L2+=1;
	var R = 130; //радиус вращения
	var venus = document.getElementById('venus');
	venus.style.top = R*Math.sin(L2*Math.PI/180)+y+'px';
	venus.style.left = R*Math.cos(L2*Math.PI/180)+x+'px';
}, 25);

setInterval(function(){//земля
	L3+=1;
	var R = 150; //радиус вращения
	var earth = document.getElementById('earth');
	earth.style.top = R*Math.sin(L3*Math.PI/180)+y+'px';
	earth.style.left = R*Math.cos(L3*Math.PI/180)+x+'px';
}, 40);

setInterval(function(){//марс
	L4+=1;
	var R = 170; //радиус вращения
	var mars = document.getElementById('mars');
	mars.style.top = R*Math.sin(L4*Math.PI/180)+y+'px';
	mars.style.left = R*Math.cos(L4*Math.PI/180)+x+'px';
}, 45);

setInterval(function(){//юпитер
	L5+=1;
	var R = 210; //радиус вращения
	var jupiter = document.getElementById('jupiter');
	jupiter.style.top = R*Math.sin(L5*Math.PI/180)+y+'px';
	jupiter.style.left = R*Math.cos(L5*Math.PI/180)+x+'px';
}, 38);

setInterval(function(){//сатурн
	L6+=1;
	var R = 260; //радиус вращения
	var saturn = document.getElementById('saturn');
	saturn.style.top = R*Math.sin(L6*Math.PI/180)+y+'px';
	saturn.style.left = R*Math.cos(L6*Math.PI/180)+x+'px';
}, 49);

setInterval(function(){//уран
	L7+=1;
	var R = 320; //радиус вращения
	var uran = document.getElementById('uran');
	uran.style.top = R*Math.sin(L7*Math.PI/180)+y+'px';
	uran.style.left = R*Math.cos(L7*Math.PI/180)+x+'px';
}, 41);

setInterval(function(){//нептун
	L8+=1;
	var R = 350; //радиус вращения
	var neptune = document.getElementById('neptune');
	neptune.style.top = R*Math.sin(L8*Math.PI/180)+y+'px';
	neptune.style.left = R*Math.cos(L8*Math.PI/180)+x+'px';
}, 50);

setInterval(function(){//луна - не хочет крутиться вокруг земли
	L9+=1;
	var R = 100; //радиус вращения
	var moon = document.getElementById('moon');
	moon.style.top = R*Math.sin(L9*Math.PI/180)+y_earth+'px';
	moon.style.left = R*Math.cos(L9*Math.PI/180)+x_earth+'px';
}, 50);

