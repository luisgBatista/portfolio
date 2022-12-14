const { origin, href } = window.location

const menuItems = {
  [`${origin}/portifolio/about.html`]: 'about',
  [`${origin}/portifolio/works.html`]: 'works',
  [`${origin}/portifolio/contact.html`]: 'contact'
}

export const onClickMenuItem = () => {
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

export const getActiveMenuItem = () => {
  const activeItem = menuItems[href]

  document.querySelector(`[data-url="${activeItem}"] a`).classList.add('active')
}

export const onClickMobileButton = () => {
  const button = document.querySelector(".menuButton");

  button.addEventListener("click", () => {
    const currentState = button.getAttribute("aria-expanded");

    currentState === "false"
      ? button.setAttribute("aria-expanded", "true")
      : button.setAttribute("aria-expanded", "false")

  });
}


