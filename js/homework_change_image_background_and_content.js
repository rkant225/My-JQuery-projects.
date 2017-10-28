function upDate(x)
{
var altt=x.alt;
var link=x.src;
var tar=document.getElementById('message');
tar.style.backgroundImage = "url("+link+")";
tar.innerHTML=altt;





}

function unDo()
{

var tar=document.getElementById('message');
tar.style.backgroundImage = "url('')";
tar.innerHTML="Hover over an image below to display here.";

}
