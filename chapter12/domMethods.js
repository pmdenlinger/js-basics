//DOM Methods we used for document manipulation

//1)document.write()
document.write('Hello');
//2) getElemenetById()
const firstParagraph = document.getElementById('first');
console.log(firstParagraph);
//3) getElementsByName
const allNames = document.getElementsByName('fname');
//returns HTMLCollection - collection of nodes
console.log(allNames);
//we can get individual nodes if we use indexes that start from 0
console.log(allNames[0]);
console.log(allNames[1]);
//4) getElementsByTagName
const li = document.getElementsByTagName('li');
console.log(li);
//we can iterate over htmlCollection
for (let i = 0; i < li.length; i++) {
    console.log(li[i]);
}
//use Array.from so we can convert to an array using Array.from()
Array.from(li).forEach(function(element) {
    console.log(element)
});

//for .. of loop is now working on most modern browsers
for (let item of li) {
    console.log(item.innerHTML);
}
//5) getElementsByClassName
const myHeaders = document.getElementsByClassName('header');
console.log(myHeaders);

const allDivs = document.getElementsByClassName('header');
allDivs[0].innerHTML = 'First Div tag with different text';

//querySelector
//by using the element class attribute
const thisDiv = document.querySelector('.myclass');
console.log(thisDiv);
//by using the element id attribute
const thisDiv1 = document.querySelector('#myclass');
console.log(thisDiv1);

//create new element
const newDiv = document.createElement('div');
//add content to the element
newDiv.innerHTML = 'This is new div with class and id myCustomClass';
//create attrtibute class
var attr = document.createAttribute("class");  
attr.value = 'myCustomClass';
var attr1 = document.createAttribute("id");
attr1.value = 'myCustomClass';

newDiv.setAttributeNode(attr);
newDiv.setAttributeNode(attr1);
//append the newly created element with its content and attributes to the body of the document
document.body.appendChild(newDiv);

