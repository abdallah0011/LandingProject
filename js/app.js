/**
 * Define Global Variables
*/

// const sections = Array(...document.querySelectorAll('section'));
const sections = Array.from(document.querySelectorAll('section'));
const ul = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
*/

/**
* @description Creates links for corresponding sections
* @function CreateList - The name of the function
*/
function createList(){
const fragDoc = document.createDocumentFragment();
  sections.forEach(function(element){
    let li = document.createElement('li');
    li.innerHTML = element.getAttribute('data-nav');
    li.setAttribute('class', 'menu__link');
    fragDoc.appendChild(li);
  });
  document.querySelector('#navbar__list').appendChild(fragDoc);
}


/**
* @description Locate the current active section and change it's class to 'your-active-class'
* @function setActiveSection - The name of the function
*/
function setActiveSection(){
  let options = {root: null, rootMargin: '0px', threshold: 0.8};
  let observer = new IntersectionObserver(callback, options);

  sections.forEach( function(section){
    observer.observe(section);
  });
}

/**
* @description Callback function that removes 'your-active-class' from all classes and links, then add 
  the class to the correct section and link again
* @function callback - The name of the function
*/
function callback(entries){
  const links = document.querySelectorAll('li');
  if(entries[0].isIntersecting){
    sections.forEach(function(section){
      if(section.classList.contains('your-active-class')){
        section.classList.remove('your-active-class');
      }
    });
  
    entries[0].target.classList.add('your-active-class');
    let dataNav = entries[0].target.getAttribute('data-nav');
    links.forEach(function(link){
      if(link.classList.contains('your-active-class')){
        link.classList.remove('your-active-class');
      }
      if(link.innerHTML === dataNav){
        link.classList.add('your-active-class');
      }
    });
  }
};

/**
 * End Helper Functions
 * Start Events
*/

 /**
* @description Scrolls down to the coressponding clicked section on the navbar
* @event click
* @param {object} event - The clicked section on the navbar
* @property {function} - Determine which section should be scrolled to
*/
ul.addEventListener('click', function(event){
  if(event.target.nodeName === 'LI'){
    let dataNav = event.target.innerHTML;
    let clickedSection = document.querySelector("[data-nav=" + CSS.escape(dataNav) + "]");
    clickedSection.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }
});

 /**
* @description An event to determine which section is the nearest to the viewport and change its layout
* @event scroll
* @property {function} setActiveSection - sets the current active class
*/
window.addEventListener('scroll',setActiveSection());

/**
 * Main
*/
createList();


