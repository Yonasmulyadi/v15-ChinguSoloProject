/**
 * Variables selection
 */
const navigationSection = document.querySelector("#navigation-section");
const jumbotronElement = [document.querySelector('#jumbotron__title'), document.querySelector('#jumbotron__note'), document.querySelector('#jumbotron .slack-link')];
const jumbotronTitle = document.querySelector('#jumbotron__title')


// .features__card

/**
 * Website's functionality
 */

window.onload = () => {
    for (let i = 0; i < jumbotronElement.length; i++)
    {
        jumbotronElement[i].style.opacity = 1;
        jumbotronElement[i].style.transform = "translateY(0px)";
    }
};


document.querySelector("#navigation-button").addEventListener('click',() => {    
    navigationSection.style.height == '0vh' ? navigationSection.style.height = '30vh' : navigationSection.style.height = '0vh';
})