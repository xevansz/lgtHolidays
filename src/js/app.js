console.log('Hello travellers!');

//for smooth scrolling
const navigation = document.querySelector(".primary-navigation")
const navigationHeight = navigation.offsetheight
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
)

const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
   navlinks.classList.toggle('mobile-menu')
})