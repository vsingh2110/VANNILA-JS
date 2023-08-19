// class list- show/get all class list
// containes-- check classlist for specific classes
// add -- add class
// remove -- remove class
// toggle -- toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", ()=>{
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }
    // else (links.classList.add('show-list'));
    links.classList.toggle("show-links");
});