import '../assets/fonts/Gilroy/stylesheet.css';
import '../assets/fonts/BebasNeus/stylesheet.css';

import '../style/mainPage/html/html.css';
import '../style/mainPage/html/reset.css';

import '../style/mainPage/header/header.css';
import '../style/mainPage/header/nav.css';

import '../style/mainPage/main/sectionBanerMain.css';
import '../style/mainPage/main/sectionGameMain.css';
import '../style/mainPage/main/mainSectionConfidence.css';
import '../style/mainPage/main/sectionBigDiscont.css';
import '../style/mainPage/main/sectionReviews.css';
import '../style/mainPage/main/mainSectionSecondBaner.css';
import '../style/mainPage/main/sectionBlog.css';

import '../style/mainPage/footer/footer.css';

const mainWrapperGameContentTitle = <HTMLElement>document.querySelector('.main-wrapper-game-content-title');
mainWrapperGameContentTitle.addEventListener('click', () => {
    location.href = './gamePage.html';
});

const card1 = <HTMLElement>document.querySelector('.card1');
card1.addEventListener('click', () => {
    location.href = './oneGamePage.html';
});

const imgIconSave = <HTMLElement>document.querySelector('.img-Icon_save');
imgIconSave.addEventListener('click', () => {
    location.href = './favoritsGamePage.html';
});
