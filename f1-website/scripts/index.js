const newsContentText = document.querySelectorAll('.news-content-text, .technical-content-text');

newsContentText.forEach(element => {
    element.parentElement.addEventListener('mouseenter', () => {
        element.style.borderColor = '#e10600';
    });

    // element.parentElement.addEventListener('mouseenter', () => {
    //     element.previousElementSibling.style.transform = "scale(1.1)";
    // });

    element.parentElement.addEventListener('mouseleave', () => {
        element.style.borderColor = '';
    });

    // element.parentElement.addEventListener('mouseleave', () => {
    //     element.previousElementSibling.style.transform = "";
    // });
});

const exploreButtons = document.querySelectorAll('.explore a');

exploreButtons.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.firstElementChild.style.filter = "brightness(40%)";
        element.firstElementChild.style.transform = "scale(1.1)";
    });

    element.addEventListener('mouseleave', () => {
        element.firstElementChild.style.filter = "";
        element.firstElementChild.style.transform = "";
    });
});