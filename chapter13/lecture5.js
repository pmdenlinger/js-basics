//console.log('It is working!');
const calculateBtn = document.querySelector('#clickBtn');
const output = document.querySelector('#result');
let result;
try{
    if(calculateBtn){
        //this was the on purpose spelling mistake
        //calculateBtm.addEventListener('click', ()=>{
            calculateBtn.addEventListener('click', ()=>{
            //console.log('button is clicked');
            var inputNum = document.getElementById('number').value;
            if(inputNum >= 1){
                //Math.pow(base,exponent)
                 result = Math.pow(inputNum, 3);
                 console.log(result);
            }
            else{
                result = 'Invalid!';
            }
            output.innerHTML = result;
        });
       
    }
}
catch(err){
    result = err.message;
    output.innerHTML = result;
 }

// //console.log('It is working!');
// const calculateBtn = document.querySelector('#clickBtn');
// const output = document.querySelector('#result');
// let result;

//     if(calculateBtn){
//         calculateBtm.addEventListener('click', ()=>{
//             //console.log('button is clicked');
//             let inputNum = document.getElementById('number').value;
//             if(inputNum >= 1){
//                 //Math.pow(base,exponent)
//                  result = Math.pow(inputNum, 3);
//                  console.log(result);
//             }
//             else{
//                 result = 'Invalid!';
//             }
//             output.innerHTML = result;
//         });
       
//     }

    