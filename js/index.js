const navLinks = document.getElementById('mainNav').querySelectorAll('a');

Array.from(navLinks).forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target
    target.classList.add('active')
    // criar uma animação para o click e abrir o href
    console.log(target.href)
  });
});