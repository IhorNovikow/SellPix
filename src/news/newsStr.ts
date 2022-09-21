import '../assets/fonts/Gilroy/stylesheet.css';
import '../assets/fonts/BebasNeus/stylesheet.css';

import '../style/mainPage/html/html.css';
import '../style/mainPage/html/reset.css';

import '../style/mainPage/header/header.css';
import '../style/mainPage/header/nav.css';

import '../style/news/main.css';
import '../style/news/sectionBanerNews.css';

import '../style/mainPage/footer/footer.css';

const sectionBlogWrapperCard: NodeListOf<Element> = document.querySelectorAll('.section-blog-wrapper-card');

sectionBlogWrapperCard.forEach((el) => {
    el.addEventListener('click', () => {
        location.href = './oneNewsPage.html';
    });
});
