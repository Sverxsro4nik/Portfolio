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