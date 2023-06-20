tailwind.config = {
     theme: {
          extend: {
               colors: {
                    clifford: '#da373d',
               }
          }
     }
}

window.addEventListener('scroll', function () {
     const navbar = document.getElementById('navbar');
     const scrolled = window.pageYOffset || document.documentElement.scrollTop;

     if (scrolled > 10) {
          navbar.classList.add('bg-white', 'backdrop-blur-sm');
     } else {
          navbar.classList.remove('bg-white', 'backdrop-blur-sm');
     }
})

function shownav() {
     const navbars = document.getElementById('navbar-mobile');
     navbars.classList.toggle('hidden')
}