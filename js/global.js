const onClickMenuItem = () => {
  const navLinks = document.querySelectorAll('nav ul a');

  Array.from(navLinks).forEach(link => {
    link.addEventListener('click', function (e) {
      navLinks.classList.remove('active')
      e.preventDefault();
      const target = e.target
      target.classList.add('active')
      // criar uma animação para o click e abrir o href
      window.location.href = target.href
    });
  });
}

const menuItems = {
  '/about.html': 'about',
  '/works.html': 'works',
  '/contact.html': 'contact'
}

const getActiveMenuItem = () => {
  const { pathname } = window.location
  const activeItem = menuItems[pathname]

  document.querySelector(`[data-url="${activeItem}"] a`).classList.add('active')
}

// FETCH NAV
const nav = document.querySelector("nav")
if (nav) {
  fetch("./common/nav.html").then(response => {
    return response.text()
  }).then(data => {
    nav.innerHTML = data;

    onClickMenuItem();
    getActiveMenuItem();
  });
}

// FETCH FOOTER
const footer = document.querySelector("footer")
if (footer) {
  fetch("./common/footer.html").then(response => {
    return response.text()
  }).then(data => {
    footer.innerHTML = data;
  });
}