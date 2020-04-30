//Task 3.0 copy paste this
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
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
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

linkEl.setAttribute('href', link.href);
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

let subMenuEl = document.getElementById('sub-menu');
//4.0 Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

subMenuEl.style.height = '100%';
//4.1 Set the height subMenuElelement to be 100%.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//4.2Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.classList.add('flex-around');
//4.3Add the class of flex-aroundto the subMenuElelement.

subMenuEl.style.position = 'absolute';
//4.4 Set the CSS positionproperty of subMenuElto the value of absolute.

subMenuEl.style.top = '0';
//4.5Set the CSS topproperty of subMenuElto the value of 0.

//task 5.0 update menuLinks array:
var menuLinks = [
{text: 'about', href: '/about'},
{text: 'catalog', href: '#', subLinks: [
  {text: 'all', href: '/catalog/all'},
  {text: 'top selling', href: '/catalog/top'},
  {text: 'search', href: '/catalog/search'},
]},
{text: 'orders', href: '#' , subLinks: [
  {text: 'new', href: '/orders/new'},
  {text: 'pending', href: '/orders/pending'},
  {text: 'history', href: '/orders/history'},
]},
{text: 'account', href: '#', subLinks: [
  {text: 'profile', href: '/account/profile'},
  {text: 'sign out', href: '/account/signout'},
]},
];

let topMenuLinks = topMenuEl.querySelectorAll('a');
//5.1 Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.

let showingSubMenu = false;
// 5.1b Declare a global showingSubMenuvariable and initialize it to false;

topMenuEl.addEventListener('click', function(e) {
e.preventDefault(); //tells to stop and it won't disappear

if (e.target.tagName !== "A")
  return

console.log(e.target.innerHTML);

topMenuLinks.forEach(function(link) {
  link.classList.remove('active')
})

if (e.target.classList.contains('active')) {
  e.target.classList.remove('active')
  showingSubMenu = false
  subMenuEl.style.top = '0';
} else {
  e.target.classList.add('active')

  let link = menuLinks.filter(function(link) {
    return link.text == e.target.innerHTML
  })

  let subLinks = link[0].subLinks;

  if (subLinks) {
    showingSubMenu = true

    buildSubMenufunction(subLinks)
    subMenuEl.style.top = '100%'
  } else {
    showingSubMenu = false
    mainEl.innerHTML = '<h1>' + e.target.innerHTML + '</h1>';
  }
}
return
});

function buildSubMenufunction(subLinks) {
subMenuEl.innerHTML = "";

subLinks.forEach(function(link) {
  let linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  subMenuEl.appendChild(linkEl);
})


subMenuEl.addEventListener('click', function(e) {
  e.preventDefault();

  if (e.target.tagName !== "A")
    return

  console.log(e.target.innerHTML);

  showingSubMenu = false
  subMenuEl.style.top = '0';

  topMenuLinks.forEach(function(link) {
    link.classList.remove('active')
  })

  mainEl.innerHTML = '<h1>' + e.target.innerHTML + '</h1>';
})
}

