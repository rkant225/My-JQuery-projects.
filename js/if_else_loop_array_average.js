var val=[];
function display()
{
document.getElementById('item').innerHTML=val;
}

function add_element()
{
var itm=prompt('Enter new element');
val[val.length]=itm;
document.getElementById('item').innerHTML=val
}

function calc_avg()
{
sum=0;
i=0;
if(val.length>0)
{
for(i=0;i<val.length;i++)
{
sum=sum+parseInt(val[i]);
}
console.log(sum);
avrg=sum/val.length;
if(isNaN(avrg))
alert("your elements are not valid...Plzzz reload the page and try again");
else
document.getElementById('out').innerHTML=avrg;



}
else
alert("Your list is empty..!!");



}
