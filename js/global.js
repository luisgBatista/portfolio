import { onClickMenuItem, getActiveMenuItem, onClickMobileButton } from './nav.js'
import { mountSocialList } from './footer.js'


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