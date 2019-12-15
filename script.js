/**
 * Variables selection
 */
const navigationSection = document.querySelector("#navigation-section");



/**
 * Website's functionality
 */
document.querySelector("#navigation-button").addEventListener('click',() => {    
    navigationSection.style.height == '0vh' ? navigationSection.style.height = '30vh' : navigationSection.style.height = '0vh';
})