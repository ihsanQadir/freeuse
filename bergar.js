burger=document.querySelector('.burger')
navbar=document.querySelector('.nav')
navList=document.querySelector('.ul')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav2');
    navList.classList.toggle('ul2');
})