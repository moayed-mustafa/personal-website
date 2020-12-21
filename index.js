
let theme = 'light'

function setTheme(theme){
    if (theme =='light') {
        document.getElementById('theme-style').href = 'default.css';
    } else {
        document.getElementById('theme-style').href = 'theme.css';

    }

}
const checkBox = document.getElementById('chk');
checkBox.addEventListener('change', function () {
    if (theme === 'light') {
        theme = 'dark';
    }
    else if (theme === 'dark') {
        theme = 'light'
    }
    setTheme(theme);

})

