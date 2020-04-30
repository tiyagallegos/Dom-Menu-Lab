

//Task 3.0 copy paste this 
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Task 1.0 Select and cache the <main>element in a variable named mainEl.
//syntax: let elementEl = document.querySelecor('element')

let mainEl = document.querySelector('main');


//Task 1.1Set the background color of mainElto the value stored in the --main-bgCSS custom property.
//Hint: Assign a string that uses the CSS var()function like this:
//'var(--main-bg)'
//syntax: elementEl.style.backgroundColor = '';

mainEl.style.backgroundColor = 'var(--main-bg)';

//Task 1.2 Set the content of mainElto <h1>SEI Rocks!</h1>
//syntax: elementEl.innerHTML or textContent? = '<opening tag> blaaaah </closingtag>';

mainEl.innerHTML = '<h1> SEI Rocks!</h1>';

//Task 1.3 Add a class of flex-ctrto mainEl.
//element.syle.backgroundColor = '';
//syntax: elementEl.classList.add('the class name? or prop? or ...');
mainEl.classList.add('flex-ctr');

//Task 2.0 select and cache <nav id="top-menu"< element in var named topMenuEl
//syntax: let topMenuEl/(var name) = document.querySelector('tag which is nav in this lab'); 
let topMenuEl = document.querySelector('nav');

//Task 2.1 set height of topMenuEl to 100%
//syntax: element.style.height = 'number'; 
topMenuEl.style.height = '100%';

//Task 2.2 set backgroundColor to element a value stored in css
//syntax: elementEl.style.backgroundColor = '';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Task 2.3 add class of flex-around to topMenuEl
//syntax: element.classListadd('');
topMenuEl.classList.add('flex-around');

//Task 3.1
//do bullet steps before array and then do the function and c-log to check
//3.1e  iterate over the entire menu links array for each link object
//element i want to ref is topMenuEl for each item in the object, and im referencing each 
//"link" object or arguing it? 

menuLinks.forEach(function(link)
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

topMenuEl.addEventListener(`click`, function(e) {
  e.preventDefault(); //tells to stop and it won't disappear
  if (e.target.tagName !=="A")
  return 
  console.log(e.target.tagName.innerHTML);
  
  topMenuElLinks.forEach(function(link)) {
    link.classList.remove('active');
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

      buildSubMenufunciton(subLinks)
      subMenuEl.style.top = '100%'
    } else {
      showingSubMenu = false
      mainEl.innerHTML = '<h1>' + e.target.innerHTML + '</h1>';
    }
  }
  return
});

function buildSubMenufunciton(subLinks) {
  subMenuEl.innerHTML = "";

  subLinks.forEach(function(link) {
    let linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  })

  subMenuEl.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName !== "A") {
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


// need the top menu links to return if whatever is clicked is not them? 
//5.2Attach a delegated 'click' event listener to topMenuEl.
//A. The first line of code of the event listener function should call the event object's preventDefault()method.

//B. The second line of code function should immediately return if the element clicked was not an <a>element.

//C. console.logthe content of the <a>to verify the handler is working.


//Task 5.3 Next in the event listener, if the clicked <a>link has a class of active:
//Remove the activeclass from the clicked <a>element.
//Set the showingSubMenuto false.
//Set the CSS topproperty of subMenuElto 0.
//returnto exit the handler.

//Task 5.4Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
//remove active from each <a> element i'm unsure of which reference to use because both are <a> e.target, and menuLinksEl
//Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
  link.classList.add('active');
});
//task 5.5 Next, the event listener should add a class name of active to the <a>element that was clicked.

//unsure do I used the 
//task 5.6
//Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

//Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

menuLinks.addEventListener(`click`, function(e) {
  e.preventDefault(); //tells to stop and it won't disappear
  if (e.target.tagName.contains('sublinks property') {
    e.target.tagName = false
  } else {
  showingSubMenu = true
  subMenuEl.style.top = '0';
  }
});

let subMenuEl = true if e.target.tagName 
