import standingsArray from "./results-data.js";

const standings = standingsArray.map((driver) => {
    const content = document.createElement('tr');
    content.innerHTML = `
        <td>${driver.position}</td>
        <td>${driver.driver}</td>
        <td>${driver.nationality}</td>
        <td>${driver.car}</td>
        <td>${driver.points}</td>
    `;

    return content;
});

standings.forEach(driver => {
    document.querySelector('.driver-table-data').append(driver);
});

const driverButton = document.querySelector('.driver-button');
const teamButton = document.querySelector('.team-button');
const buttons = document.querySelectorAll('.results section button');
let isActive = true;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isActive) {
            driverButton.style.backgroundColor = '#d0d0d2';
            teamButton.style.backgroundColor = '';
            document.querySelector('.driver-table').style.display = "";
        } else {
            driverButton.style.backgroundColor = '#ededed';
            teamButton.style.backgroundColor = '#d0d0d2';
            document.querySelector('.driver-table').style.display = "none";
        }
        isActive = !isActive;
    });
});





