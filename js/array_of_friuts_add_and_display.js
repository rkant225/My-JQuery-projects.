var fruits=["Apple","Banana","Mango"];
function display()
{
document.getElementById('item').innerHTML=fruits;
}

function add_fruit()
{
var frt=prompt('What is your favourate fruit..???');
fruits[fruits.length]=frt;
document.getElementById('item').innerHTML=fruits;
}
