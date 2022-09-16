import './assets/fonts/Gilroy/stylesheet.css';
import './assets/fonts/BebasNeus/stylesheet.css';

import './style/mainPage/html/html.css';
//import './style/mainPage/html/body.css';
import './style/mainPage/html/reset.css';

import './style/mainPage/header/header.css';
import './style/mainPage/header/nav.css';

import './style/mainPage/main/sectionGameMain.css';
import './style/gamePage/main.css';

import './style/mainPage/footer/footer.css';

const card1 = <HTMLElement>document.querySelector('.card1');
card1.addEventListener('click', () => {
    location.href = './oneGamePage.html';
});
