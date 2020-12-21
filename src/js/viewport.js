const navLinks = document.querySelectorAll('nav li a');
console.log(navLinks);
const sections = document.querySelectorAll('section');
console.log(sections);
document.addEventListener('scroll', () =>{
    for(let section of sections) {

        if(section.offsetTop < window.pageYOffset && section.id){
            console.log(true);
        }
    }
    // console.log(window.pageYOffset);
})