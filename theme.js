
let themeStored = localStorage.getItem('theme');
if (themeStored === null) {
    localStorage.setItem('theme', 'light');
    themeStored = localStorage.getItem('theme');
}
//! call the function with the existing value of theme
setTheme(themeStored)



const checkBox = document.getElementById('chk');
//! make sure that the checkbox is at the right end

if (themeStored === 'dark') {
    checkBox.checked = true;
}

// * event handler for the check box
checkBox.addEventListener('change', function () {
    if (themeStored === 'light') {
        localStorage.setItem('theme', 'dark');

    }
    else if (themeStored === 'dark') {
        localStorage.setItem('theme', 'light');
    }
    themeStored = localStorage.getItem('theme');
    setTheme(themeStored);

})

//* theme setter
function setTheme(theme){
    if (theme =='light') {
        document.getElementById('theme-style').href = 'default.css';
    } else {
        document.getElementById('theme-style').href = 'theme.css';

    }

}

