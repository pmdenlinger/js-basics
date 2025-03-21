
let widthInPx = window.innerWidth;
let heightInPx = window.innerHeight;

//alert method
alert('Welcome, Welcome');

//confirm method
let result = confirm("Are you 18 plus?"); //confirmation   
if(result)  
{    
    alert("yes");    
}    
else  
{    
    alert("no");    
}    

//prompt
let old = prompt("How old are you?");// input box    
alert("I am "+old);    

//setTimeOut
setTimeout(    function()  
{    
    alert("This alert box will be visible after 2 second because 2000 milliseconds is equal to 2s") ;
},2000);   