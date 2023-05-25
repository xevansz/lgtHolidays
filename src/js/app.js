console.log('Hello travellers!');

//for smooth scrolling
const navigation = document.querySelector(".primary-navigation")
const navigationHeight = navigation.offsetheight
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
)

