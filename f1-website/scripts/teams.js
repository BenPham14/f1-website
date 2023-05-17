import {teamStandingsObjectArray} from "./results-data.js";

const teams = teamStandingsObjectArray.map((team) => {
    const content = document.createElement('div');
    content.classList.add('team');
    content.innerHTML = `
        <div class="flex">
            <h1>${team.position}</h1>
            <div class="flex column">
                <h2>${team.points}</h2>
                <h2>PTS</h2>
            </div>
        </div>
        <div class="flex name">
            <h2>${team.team}</h2>
            <img src=${team.logoImage.image} alt=${team.logoImage.alt} width="50px">
        </div>
        <div class="grid drivers">
            <div class="flex driver">
                <h3>${team.driver1.driver}</h3>
                <img src=${team.driver1.image} alt="${team.driver1.driver}" width="48px">
            </div>
            <div class="flex driver">
                <h3>${team.driver2.driver}</h3>
                <img src=${team.driver2.image} alt=${team.driver2.driver} width="48px">
            </div>
        </div>
        <div class="bkg-grid">
            <img src=${team.carImage.image} alt=${team.carImage.alt} width="500px">
        </div>
    `;
    return content;
});

teams.forEach((team) => {
    document.querySelector(".teams .teams-grid").append(team);
});


    
