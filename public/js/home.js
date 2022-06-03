
const navbarEl = $('nav div');
const navbar = {
    readmeButton: navbarEl.children('a[href="#readme"]'),
    publicPostButton: navbarEl.children('a[href="#posts"]'),
    loginButton: navbarEl.children('a[href="#login"]'),
    themesButton: navbarEl.children('a[href="#themes"]'),
}

const themes = [
    '../themes/default.css',
    '../themes/black-and-while.css',
    '../themes/deep-green.css'
]

$(navbar.themesButton).click(() => {
    console.log('click');
    $('#theme-stylesheet').attr('href', themes[Math.floor(Math.random()*(themes.length - 1))]);
});



