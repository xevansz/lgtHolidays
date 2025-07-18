console.log('Hello travellers!');

// For smooth scrolling: set scroll-padding based on navbar height
const navigation = document.querySelector('.navbar');
if (navigation) {
  const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty(
    '--scroll-padding',
    navigationHeight + 'px'
  );
}

// Dropdown menu logic (selectors updated)
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.getElementById('dest-dropdown');

if (dropdown && dropdownToggle && dropdownMenu) {
  function openDropdown() {
    dropdown.classList.add('open');
    dropdownToggle.setAttribute('aria-expanded', 'true');
    dropdownMenu.hidden = false;
    // Focus first dropdown item
    const firstItem = dropdownMenu.querySelector('a');
    if (firstItem) firstItem.focus();
  }
  function closeDropdown() {
    dropdown.classList.remove('open');
    dropdownToggle.setAttribute('aria-expanded', 'false');
    dropdownMenu.hidden = true;
    dropdownToggle.focus();
  }
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    if (!expanded) {
      openDropdown();
    } else {
      closeDropdown();
    }
  });
  // Keyboard: open on ArrowDown, close on Escape
  dropdownToggle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDropdown();
    }
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });
  dropdownMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });
  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });
}

// Active link highlighting on scroll and click (selectors updated)
const navLinks = document.querySelectorAll('.navbar-links a');
const sections = [
  {id: 'home', link: document.querySelector('.navbar-links a[href="#home"]')},
  {id: 'contribution', link: document.querySelector('.navbar-links a[href="#contribution"]')},
  {id: 'about', link: document.querySelector('.navbar-links a[href="#about"]')}
];
function setActiveLink(link) {
  navLinks.forEach(l => l.classList.remove('active'));
  if (link) link.classList.add('active');
  // If dropdown item is active, also highlight the dropdown toggle
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  if (dropdownToggle) {
    if (link && link.closest('.dropdown-menu')) {
      dropdownToggle.classList.add('active');
    } else {
      dropdownToggle.classList.remove('active');
    }
  }
}
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    setActiveLink(this);
  });
});
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 80;
  let found = false;
  for (let s of sections) {
    const section = document.getElementById(s.id);
    if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      setActiveLink(s.link);
      found = true;
      break;
    }
  }
  if (!found) setActiveLink(null);
});

// Sticky navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});