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
const sectionSettingsProfile = <HTMLElement>document.querySelector('.section-settings-profile');
const sectionSettingsMail = <HTMLElement>document.querySelector('.section-settings-mail');
const sectionMySeils = <HTMLElement>document.querySelector('.section-my-seils');

profile.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    profile.classList.add('li-navigation-box-active');
    sectionSettingsProfile.classList.add('displayNone');
    sectionSettingsMail.classList.add('displayNone');
    sectionMySeils.classList.add('displayNone');
    informationProfile.classList.remove('displayNone');
});

settingsProfile.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    settingsProfile.classList.add('li-navigation-box-active');
    sectionSettingsMail.classList.add('displayNone');
    sectionMySeils.classList.add('displayNone');
    informationProfile.classList.add('displayNone');
    sectionSettingsProfile.classList.remove('displayNone');
});

settingsMail.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    settingsMail.classList.add('li-navigation-box-active');
    sectionSettingsProfile.classList.add('displayNone');
    sectionMySeils.classList.add('displayNone');
    informationProfile.classList.add('displayNone');
    sectionSettingsMail.classList.remove('displayNone');
});

myPurchases.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    myPurchases.classList.add('li-navigation-box-active');
    sectionSettingsProfile.classList.add('displayNone');
    sectionSettingsMail.classList.add('displayNone');
    informationProfile.classList.add('displayNone');
    sectionMySeils.classList.remove('displayNone');
});

exit.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    exit.classList.add('li-navigation-box-active');
    sectionSettingsProfile.classList.add('displayNone');
    sectionSettingsMail.classList.add('displayNone');
    sectionMySeils.classList.add('displayNone');
    informationProfile.classList.add('displayNone');
});
