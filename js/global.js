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

const getActiveMenuItem = () => {
  const activeItem = menuItems[href]

  document.querySelector(`[data-url="${activeItem}"] a`).classList.add('active')
}

const onClickMobileButton = () => {
  const button = document.querySelector(".menuButton");

  button.addEventListener("click", () => {
    const currentState = button.getAttribute("aria-expanded");

    currentState === "false"
      ? button.setAttribute("aria-expanded", "true")
      : button.setAttribute("aria-expanded", "false")

  });
}

const { origin, href } = window.location

const menuItems = {
  [`${origin}/portifolio/about.html`]: 'about',
  [`${origin}/portifolio/works.html`]: 'works',
  [`${origin}/portifolio/contact.html`]: 'contact'
}

const getSVGCode = async (url) => {
  const request = await fetch(url)
  return request.text()
}

const socialMidiaItems = async () => ([
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/luis-gustavo-batista",
    image: await getSVGCode("./img/linkedin.svg")
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/encode_front",
    image: await getSVGCode("./img/instagram.svg")
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com/@encode7583",
    image: await getSVGCode("./img/youtube.svg")
  }
])

const mountSocialList = async () => {
  const items = await socialMidiaItems()

  const htmlListItems = items.map(item => `
    <li>
      <a href="${item.url}" title="${item.title}">
        ${item.image}
      </a>
    </li>
  `).join('')

  document.querySelector('footer .social-list').innerHTML = htmlListItems
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
    onClickMobileButton();
  });
}

// FETCH FOOTER
const footer = document.querySelector("footer")
if (footer) {
  fetch("./common/footer.html").then(response => {
    return response.text()
  }).then(data => {
    footer.innerHTML = data;

    mountSocialList()
  });
}