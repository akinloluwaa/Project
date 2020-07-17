let lightMode = localStorage.getItem('light');
const lightModeToggle = document.querySelector('#mode-toggle');

// check if light mode is enabled 
//  if enabled, turn it off
// if it is disabled, turn it on

const enableLightMode = () => {
    // 1. add the class light mode to the body
    document.body.classList.add('light');
    // 2. update light mode in the localStorage
    localStorage.setItem('light', 'enabled');
    // 3. update mode title
};
const disableLightMode = () => {
    // 1. add the class light mode to the body
    document.body.classList.remove('light');
    // 2. update light mode in the localStorage
    localStorage.setItem('light', null);
};
if (lightMode === "enabled") {
    enableLightMode();
};


lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem('light')
    if (lightMode !== 'enabled') {
        enableLightMode();
        console.log(lightMode);
    } else {
        disableLightMode();
        console.log(lightMode);
    }
});