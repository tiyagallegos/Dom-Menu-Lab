//Task 1.0 Select and cache the <main>element in a variable named mainEl.

let mainEl = document.querySelector('main');

//Task 1.1Set the background color of mainElto the value stored in the --main-bgCSS custom property.
//Hint: Assign a string that uses the CSS var()function like this:
//'var(--main-bg)'
mainEl.style.backgroundColor = 'var(--main-bg)';

//Task 1.2 Set the content of mainElto <h1>SEI Rocks!</h1>

mainEl.innerHTML = '<h1> SEI Rocks!</h1>';

//Task 1.3 Add a class of flex-ctrto mainEl.

mainEl.classList.add('flex-ctr');

//Task 2.0
let topMenuEl = document.querySelector('nav');

//Task 2.1

topMenuEl.style.height = '100%';

//Task 2.2

topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Task 2.3

mainEl.classList.add('flex-around');

