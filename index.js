
var timestring=undefined
var localdatestring=undefined
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//getTime,getDATE etc find at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
setInterval(() => {
    a=new Date()
//+"<br>"+b.toTString()+"<br>"
timestring=a.toLocaleTimeString()
localdatestring=a.toLocaleDateString(undefined,options)
document.getElementById('time').innerHTML=timestring+"<br>"+localdatestring
}, 1000);
    