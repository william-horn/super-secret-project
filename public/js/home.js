
const navbar = {
    readmeButton: $('a[href="#readme"]'),
    publicPostButton: $('a[href="#posts"]'),
    loginButton: $('a[href="#login"]'),
    themesButton: $('a[href="#themes"]'),
}

const themes = [
    './css/themes/default.css',
    './css/themes/black-and-white.css',
    './css/themes/deep-green.css',
    ' '
]

const getCycleClick = eventFunc => {
    let index = 0;
    return () => {
        eventFunc(index);
        index++;
    }
}

const getNextTheme = getCycleClick(index => $('#theme-stylesheet').attr('href', themes[(index + 1)%themes.length]));
navbar.themesButton.click(getNextTheme);

console.log('finished');

