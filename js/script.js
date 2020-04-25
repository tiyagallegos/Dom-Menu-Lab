//Task 3.0 copy paste this ish
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Task 1.0 Select and cache the <main>element in a variable named mainEl.
let mainEl = document.querySelector('main');
//syntax: let elementEl = document.querySelecor('element')


//Task 1.1Set the background color of mainElto the value stored in the --main-bgCSS custom property.
//Hint: Assign a string that uses the CSS var()function like this:
//'var(--main-bg)'
mainEl.style.backgroundColor = 'var(--main-bg)';
//syntax: elementEl.style.backgroundColor = '';

//Task 1.2 Set the content of mainElto <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1> SEI Rocks!</h1>';
//syntax: elementEl.innerHTML or textContent? = '<opening tag> blaaaah </closingtag>';

//Task 1.3 Add a class of flex-ctrto mainEl.
//element.syle.backgroundColor = '';
mainEl.classList.add('flex-ctr');
//syntax: elementEl.classList.add('the class name? or prop? or ...');

//Task 2.0 select and cache <nav id="top-menu"< element in var named topMenuEl
let topMenuEl = document.querySelector('nav');
//syntax: let topMenuEl/(var name) = document.querySelector('tag which is nav in this lab'); 

//Task 2.1 set height of topMenuEl to 100%
topMenuEl.style.height = '100%';
//syntax: element.style.height = 'number'; 

//Task 2.2 set backgroundColor to element a value stored in css
topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//syntax: elementEl.style.backgroundColor = '';

//Task 2.3 add class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');
//syntax: element.classListadd('');

//Task 3.1
//do bullet steps before array and then do the function and c-log to check

menuLinks.forEach(function(link)
//3.1e  iterate over the entire menu links array for each link object
//element i want to ref is topMenuEl for each item in the object, and im referencing each 
//"link" object or arguing it? 
{
let linkEl = document.createElement('a');
//3.1a create element in DOM 
//syntax : Let elementEl = document.createElement(tagname,[])

linkEl.setAttribute('href', 'link.href');
//3.1b on element add href att and set value to href propert of link object
//syntax: elementEl.seAttribute(property, element.property--check in about
//syntax and if that's what this question says when saying href prop to linkobj)

linkEl.textContent = link.text;
//3.1c set element content to value of text propert on link object
//syntax element.textContent = element.text

topMenuEl.appendChild(linkEl);
//3.1d append new element to topMenuEl element
//syntax: Parent element.apendChild(childelement)
});

let subMenuEl = document.getElementbyID('sub-menu');
//4. Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.







