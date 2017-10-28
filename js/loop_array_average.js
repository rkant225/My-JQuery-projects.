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
for(i=0;i<val.length;i++)
{
sum=sum+parseInt(val[i]);
}
console.log(sum);
avrg=sum/val.length;
document.getElementById('out').innerHTML=avrg;




}
