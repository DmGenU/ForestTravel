const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

//анимация иконки
navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    //появление меню
    nav.classList.toggle('nav--active');
})

//закрытие модалки при реализации якоря

    //ищем все ссылки
const navLinks = document.querySelectorAll('.nav a');
// console.log(navLinks);

//обход ссылки методом forEach
navLinks.forEach(function(item){
    //для каждой ссылки добавляем прослушку событий по клику
    item.addEventListener('click', function(){
        // console.log("click!!!");
        //убираем активные классы у иконки и самой мобильной навигации
        navIcon.classList.remove('nav-icon--active');
        nav.classList.remove('nav--active');
    })
})