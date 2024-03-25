let nav=document.querySelector('nav');
let navigation=document.querySelector('nav ul');
let showMenu=document.querySelector('.show-menu');
let hideMenu;


showMenu.addEventListener('click',shownav=>{
    showMenu.classList.add('fa-x','hide-menu')
    navigation.classList.add('ul-sm','flex')
    navigation.classList.remove('hidden','relative','space-x-6')
    showMenu.classList.remove('fa-navicon','show-menu')
    hideMenu=document.querySelector('.hide-menu');


   hideMenu.addEventListener('click',hidenav=>{
        hideMenu.classList.add('fa-navicon','show-menu')
        hideMenu.classList.remove('fa-x','hide-menu')
        navigation.classList.add('hidden','relative','space-x-6')
        navigation.classList.remove('ul-sm','flex')

        
    })

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


