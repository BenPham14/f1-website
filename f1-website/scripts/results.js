import {driverStandingsObjectArray, teamStandingsObjectArray} from "./results-data.js";

let isActive = true;

if (isActive) {
    const driverTable = document.createElement('table');
        driverTable.classList.add("driver-table")
        driverTable.innerHTML = `
            <thead>
                <tr>
                    <th>POS</th>
                    <th>DRIVER</th>
                    <th>NATIONALITY</th>
                    <th>CAR</th>
                    <th>PTS</th>
                </tr>
            </thead>
            <tbody class="driver-table-data"></tbody>
        `;

        const driverStandings = driverStandingsObjectArray.map((driver) => {
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

        document.querySelector(".standings-table > div").append(driverTable);
        driverStandings.forEach(driver => {
        document.querySelector('.driver-table-data').append(driver);
    });
} else {
    const teamTable = document.createElement('table');
    teamTable.classList.add("team-table")
    teamTable.innerHTML = `
        <thead>
            <tr>
                <th>POS</th>
                <th>TEAM</th>
                <th>PTS</th>
            </tr>
        </thead>
        <tbody class="driver-table-data"></tbody>
    `;

    const teamStandings = teamStandingsObjectArray.map((team) => {
        const content = document.createElement('tr');
        content.innerHTML = `
            <td>${team.position}</td>
            <td>${team.team}</td>
            <td>${team.points}</td>
        `;

        return content;
    });

    document.querySelector(".standings-table > div").append(teamTable);
    teamStandings.forEach(team => {
        document.querySelector('.driver-table-data').append(team);
    });
}

const driverButton = document.querySelector('.driver-button');
const teamButton = document.querySelector('.team-button');
const buttons = document.querySelectorAll('.results section button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isActive) {
            driverButton.style.backgroundColor = '#d0d0d2';
            teamButton.style.backgroundColor = '';
            // document.querySelector('.driver-table').style.display = "";
            // document.querySelector('.team-table').style.display = "none";
        } else {
            driverButton.style.backgroundColor = '#ededed';
            teamButton.style.backgroundColor = '#d0d0d2';
            // document.querySelector('.driver-table').style.display = "none";
            // document.querySelector('.team-table').style.display = "";
        }
        isActive = !isActive;
    });
});





