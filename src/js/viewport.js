const navLinks = document.querySelectorAll('nav li a');
console.log(navLinks);
const sections = document.querySelectorAll('section');

const view = (arr) => {
    for(let elem of arr){
        let elemView = elem.getBoundingClientRect();
        if(window.pageYOffset  === elemView.offsetTop){
            console.log('get');
        }
    }
}
view(sections);
//const domREct = elem.getBoundingClientRect();
console.log(sections);
function pageY(){
    console.log(window.pageYOffset);
}
pageY();