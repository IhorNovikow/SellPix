import '../assets/fonts/Gilroy/stylesheet.css';
import '../assets/fonts/BebasNeus/stylesheet.css';

import '../style/mainPage/html/html.css';
import '../style/mainPage/html/reset.css';

import '../style/mainPage/header/header.css';
import '../style/mainPage/header/nav.css';

import '../style/profile/main.css';
import '../style/profile/sectionNavigationBox.css';
import '../style/profile/sectionInformationProfile.css';
import '../style/profile/sectionSettingsProfile.css';
import '../style/profile/sectionSettingsMail.css';
import '../style/profile/sectionMySeils.css';

import '../style/mainPage/footer/footer.css';

const profile = <HTMLElement>document.querySelector('.profile');
const settingsProfile = <HTMLElement>document.querySelector('.settings-profile');
const settingsMail = <HTMLElement>document.querySelector('.settings-mail');
const myPurchases = <HTMLElement>document.querySelector('.my-purchases');
const exit = <HTMLElement>document.querySelector('.exit');

const liNavigationBox = document.querySelectorAll('.li-navigation-box');
const informationProfile = <HTMLElement>document.querySelector('.information-profile');

profile.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    profile.classList.add('li-navigation-box-active');
    informationProfile.classList.add('displayNone');
});

settingsProfile.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    settingsProfile.classList.add('li-navigation-box-active');
    informationProfile.classList.add('displayNone');
});

settingsMail.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    settingsMail.classList.add('li-navigation-box-active');
    informationProfile.classList.add('displayNone');
});

myPurchases.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    myPurchases.classList.add('li-navigation-box-active');
    informationProfile.classList.add('displayNone');
});
exit.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    exit.classList.add('li-navigation-box-active');
    informationProfile.classList.add('displayNone');
});
