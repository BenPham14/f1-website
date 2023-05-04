const newsContentText = document.querySelectorAll('.news-content-text, .technical-content-text');

newsContentText.forEach(element => {
    element.parentElement.addEventListener('mouseenter', () => {
        element.style.borderColor = '#e10600';
    });

    element.parentElement.addEventListener('mouseleave', () => {
        element.style.borderColor = '';
    });
});