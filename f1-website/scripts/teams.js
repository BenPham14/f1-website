import {teamStandingsObjectArray} from "./results-data.js";

const content = document.createElement('div');
content.classList.add('team');
content.innerHTML = `
    <div class="flex">
        <h1>${teamStandingsObjectArray[0].position}</h1>
        <div class="flex column">
            <h2>${teamStandingsObjectArray[0].points}</h2>
            <h2>PTS</h2>
        </div>
    </div>
    <div class="flex name">
        <h2>${teamStandingsObjectArray[0].team}</h2>
        <img src=${teamStandingsObjectArray[0].logoImage.image} alt=${teamStandingsObjectArray[0].logoImage.alt} width="50px">
    </div>
    <div class="grid drivers">
        <div class="flex driver">
            <h3>${teamStandingsObjectArray[0].driver1.driver}</h3>
            <img src=${teamStandingsObjectArray[0].driver1.image} alt="${teamStandingsObjectArray[0].driver1.driver}" width="48px">
        </div>
        <div class="flex driver">
            <h3>${teamStandingsObjectArray[0].driver2.driver}</h3>
            <img src=${teamStandingsObjectArray[0].driver2.image} alt=${teamStandingsObjectArray[0].driver2.driver} width="48px">
        </div>
    </div>
    <div class="bkg-grid">
        <img src=${teamStandingsObjectArray[0].carImage.image} alt=${teamStandingsObjectArray[0].carImage.alt} width="500px">
    </div>
`;

document.querySelector(".teams .teams-grid").append(content);

    
