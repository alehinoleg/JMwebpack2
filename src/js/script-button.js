const mainContent__visibility = document.querySelector('.main-content__visibility');
const bottomButtonMainContent = document.querySelector('.main-content__bottomButton');
const topButtonMainContent = document.querySelector('.main-content__topButton');

bottomButtonMainContent.onclick = function () {
    mainContent__visibility.classList.add('main-content__visibility--height');
    topButtonMainContent.classList.add('main-content__topButton--block');
    bottomButtonMainContent.classList.add('main-content__bottomButton--none');
};

topButtonMainContent.onclick = function () {
    mainContent__visibility.classList.remove('main-content__visibility--height');
    topButtonMainContent.classList.remove('main-content__topButton--block');
    bottomButtonMainContent.classList.remove('main-content__bottomButton--none');
};



const brands = document.querySelector('.slider-containerBrend');
const bottomButton = document.querySelector('.bottomButton');
const topButton = document.querySelector('.topButton');

bottomButton.onclick = function () {
    brands.classList.add('slider-container--height');
    topButton.classList.add('topButton--block');
    bottomButton.classList.add('bottomButton--none');
};

topButton.onclick = function () {
    brands.classList.remove('slider-container--height');
    topButton.classList.remove('topButton--block');
    bottomButton.classList.remove('bottomButton--none');
};



const sliderContainerRepairs = document.querySelector('.slider-containerRepairs');
const sliderContainerRepairsBottomButton = document.querySelector('.slider-containerRepairs__bottomButton');
const sliderContainerRepairsTopButton = document.querySelector('.slider-containerRepairs__topButton');

sliderContainerRepairsBottomButton.onclick = function () {
    sliderContainerRepairs.classList.add('slider-containerRepairs--height');
    sliderContainerRepairsTopButton.classList.add('slider-containerRepairs__topButton--block');
    sliderContainerRepairsBottomButton.classList.add('slider-containerRepairs__bottomButton--none');
};

sliderContainerRepairsTopButton.onclick = function () {
    sliderContainerRepairs.classList.remove('slider-containerRepairs--height');
    sliderContainerRepairsTopButton.classList.remove('slider-containerRepairs__topButton--block');
    sliderContainerRepairsBottomButton.classList.remove('slider-containerRepairs__bottomButton--none');
};

