let nav=document.querySelector('nav');
let navigation=document.querySelector('nav ul');
var showMenu=document.querySelector('.see_menu');
let hideMenu=document.querySelector('.hide-menu');

// if("fa text-3xl text-callToAction fa-navicon show-menu")
console.log(hideMenu)

showMenu.addEventListener('click',shownav=>{
    hideMenu.classList.add('fa-x')
    navigation.classList.add('ul-sm','flex')
    navigation.classList.remove('hidden','relative','space-x-6')
    showMenu.classList.remove('fa-navicon','see_menu')
    // hideMenu=document.querySelector('.hide-menu');

})
hideMenu.addEventListener('click',hidenav=>{
    hideMenu.classList.remove('fa-x')
    navigation.classList.remove('ul-sm','flex')
    navigation.classList.add('hidden','relative','space-x-6')
    showMenu.classList.add('fa-navicon','see_menu')
 
})

 




// on scrollling=============================================
let numScrollLength;
window.addEventListener('scroll',al=>{
    numScrollLength=window.document.documentElement.scrollTop;

    if(numScrollLength  > 62){
        // alert('above 200!')
        nav.classList.remove('relative')
        nav.classList.add('stick-top')
        nav.classList.add('shadow-md')
 
    }
    else{
        nav.classList.add('relative')
        nav.classList.remove('stick-top')
        nav.classList.remove('shadow-md')

    }
})


