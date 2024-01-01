const whitemodeInput=document.querySelector('#darkmode2');

whitemodeInput.addEventListener('click',()=> {
     document.documentElement.classList.toggle('dark');
})