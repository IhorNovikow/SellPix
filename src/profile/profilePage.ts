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

const iconUserProfile = <HTMLElement>document.querySelector('.icon-user-profile');
const iconSettingsProfile = <HTMLElement>document.querySelector('.icon-settings-profile');
const iconMailProfile = <HTMLElement>document.querySelector('.icon-mail-profile');
const iconGamesProfile = <HTMLElement>document.querySelector('.icon-games-profile');

const informationProfile = <HTMLElement>document.querySelector('.information-profile');
const sectionSettingsProfile = <HTMLElement>document.querySelector('.section-settings-profile');
const sectionSettingsMail = <HTMLElement>document.querySelector('.section-settings-mail');
const sectionMySeils = <HTMLElement>document.querySelector('.section-my-seils');

profile.addEventListener('click', () => {
    liNavigationBox.forEach((el) => {
        el.classList.remove('li-navigation-box-active');
    });
    iconUserProfile.classList.add('icon-navigation-box-active');
    iconSettingsProfile.classList.remove('icon-navigation-box-active');
    iconMailProfile.classList.remove('icon-navigation-box-active');
    iconGamesProfile.classList.remove('icon-navigation-box-active');

    iconUserProfile.classList.remove('icon-navigation-box-off');
    iconSettingsProfile.classList.add('icon-navigation-box-off');
    iconMailProfile.classList.add('icon-navigation-box-off');
    iconGamesProfile.classList.add('icon-navigation-box-off');

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
    iconUserProfile.classList.remove('icon-navigation-box-active');
    iconSettingsProfile.classList.add('icon-navigation-box-active');
    iconMailProfile.classList.remove('icon-navigation-box-active');
    iconGamesProfile.classList.remove('icon-navigation-box-active');

    iconUserProfile.classList.add('icon-navigation-box-off');
    iconSettingsProfile.classList.remove('icon-navigation-box-off');
    iconMailProfile.classList.add('icon-navigation-box-off');
    iconGamesProfile.classList.add('icon-navigation-box-off');

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

    iconUserProfile.classList.remove('icon-navigation-box-active');
    iconSettingsProfile.classList.remove('icon-navigation-box-active');
    iconMailProfile.classList.add('icon-navigation-box-active');
    iconGamesProfile.classList.remove('icon-navigation-box-active');

    iconUserProfile.classList.add('icon-navigation-box-off');
    iconSettingsProfile.classList.add('icon-navigation-box-off');
    iconMailProfile.classList.remove('icon-navigation-box-off');
    iconGamesProfile.classList.add('icon-navigation-box-off');

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
    iconUserProfile.classList.remove('icon-navigation-box-active');
    iconSettingsProfile.classList.remove('icon-navigation-box-active');
    iconMailProfile.classList.remove('icon-navigation-box-active');
    iconGamesProfile.classList.add('icon-navigation-box-active');

    iconUserProfile.classList.add('icon-navigation-box-off');
    iconSettingsProfile.classList.add('icon-navigation-box-off');
    iconMailProfile.classList.add('icon-navigation-box-off');
    iconGamesProfile.classList.remove('icon-navigation-box-off');

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
