// получение всех элементов навигационной панели
const navLinks = document.querySelectorAll('nav li a');
// получение всех секция, присутствуют в проекте
const sections = document.querySelectorAll('section');
// навешивание на документ событие скрола
document.addEventListener('scroll', viewport);
/* 
    Создаем функцию, которая срабатывает при скроле, она не принимает никаких параметров
    Далее в теле функции перебераем массив секция и проверяем совпадают ли следующие параметры:
    отступ сверху должен быть больше точки прокрутки страницы и 
    высота элемента должна быть больше или равна расстоянию внешней границы нужного элемента
    и текущего положения проскроленного окна
    Если условие верно то мы перебираем массив навигационных ссылок 
    если дата-атрибут равен id секции то для элемента навигации добавляем класс
*/
function viewport(){
    for(let section of sections) {
        if(section.offsetTop > window.pageYOffset && section.clientHeight >= section.offsetTop - window.pageYOffset) {
            for(let i = 0; i < navLinks.length; i++){
                if(navLinks[i].getAttribute('data-value') === section.id){
                    navLinks[i].classList.add('active');
                    // navLinks[i].style.color = '#FE9E0E';
                    continue;
                }
                navLinks[i].classList.remove('active');

            }
            break;
        }
    }
}
const workLinks = document.querySelectorAll('.work li');
const gallery = document.querySelector('.galerry');
const images = {
    all: ['./dist/images/first__work.jpg', './dist/images/second__work.jpg', './dist/images/third__work.jpg'],
    programm: ['./dist/images/first__work.jpg', './dist/images/third__work.jpg'],
    design: ['./dist/images/first__work.jpg', './dist/images/second__work.jpg', './dist/images/third__work.jpg']
}
function activeLink(array, className){
    createImages(images, 'all');
    let activeLink;
    for(let i = 0; i < array.length; i++){
        array[i].onclick = () => {
            for(let item of array){
                if(item.classList.contains(className)){
                    activeLink = item;
                    gallery.innerHTML = '';
                }
            }
            activeLink.classList.remove(className);
            array[i].classList.add(className);
            createImages(images, array[i].getAttribute('data-work'));
        }
    }
}
function createImages(object, value) {
    for(let item in object){
        if(value === item){
            for(let key of object[item]){
                let img = document.createElement('img');
                img.src = key;
                img.setAttribute('width', '360px');
                img.setAttribute('height', '200px');
                img.setAttribute('loading', 'lazy');
                img.alt = 'Работа';
                gallery.append(img);
            }
        }
    }
}
activeLink(workLinks, 'active');
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        

        let error = formValidate(form);
        if(error === 0) {

        }else{
            alert('Неправильно заполнена форма');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);
            if(input.classList.contains('_email')) {
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else{
                if(input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,8})+$/.test(input.value);
    }
})