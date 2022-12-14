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

export const mountSocialList = async () => {
  const items = await socialMidiaItems()

  const htmlListItems = items.map(item => `
    <li>
      <a href="${item.url}" title="${item.title}" target="_blank" >
        ${item.image}
      </a>
    </li>
  `).join('')

  document.querySelector('footer .social-list').innerHTML = htmlListItems
}
