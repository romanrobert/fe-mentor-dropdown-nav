const dropDownToggleFeatures = document.querySelector('.features');
const dropDownToggleCompany = document.querySelector('.company');
const dropDownFeatures = document.querySelector('.features-dropdown');
const dropDownCompany = document.querySelector('.company-dropdown')
const arrowFeatures = document.querySelector('.arrow-features');
const arrowCompany = document.querySelector('.arrow-company');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__menu');
const backDrop = document.querySelector('.backdrop')




dropDownToggleFeatures.addEventListener('click', () =>{
    dropDownFeatures.classList.toggle('dropdown-active')
    arrowFeatures.classList.toggle('arrow-active');
    
})

dropDownToggleCompany.addEventListener('click', () => {
    dropDownCompany.classList.toggle('dropdown-active');
    arrowCompany.classList.toggle('arrow-active');
})


burger.addEventListener('click', () => {

    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
    backDrop.classList.toggle('backdrop-active')

});