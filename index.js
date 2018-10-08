var a=document.querySelector("#color1");
var b=document.querySelector("#color2");
var c=document.querySelector("body");
var h=document.querySelector("h3");

a.addEventListener("input",function(){
	c.style.background="linear-gradient(to right ," +a.value+","+b.value+")";
	h.textContent=c.style.background +";";
});

b.addEventListener("input",function(){
	c.style.background="linear-gradient(to right ," +a.value+","+b.value+")";
	h.textContent=c.style.background +";";
});