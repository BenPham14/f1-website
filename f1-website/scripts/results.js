import {driverStandingsObjectArray, teamStandingsObjectArray} from "./results-data.js";

/** Drivers table **/

const driverTable = document.createElement('div');
driverTable.classList.add('tab-content');
driverTable.setAttribute('id', 'driver');
driverTable.innerHTML = `
    <table class="driver-table">
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
    </table>
`;

const driverTableData = driverStandingsObjectArray.map((driver) => {
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
driverTableData.forEach(driver => {
    document.querySelector('.driver-table-data').append(driver);
});

/** Teams table **/

const teamTable = document.createElement('div');
teamTable.classList.add('tab-content');
teamTable.setAttribute('id','team')
teamTable.innerHTML = `
    <table class="team-table">
        <thead>
            <tr>
                <th>POS</th>
                <th>TEAM</th>
                <th>PTS</th>
            </tr>
        </thead>
        <tbody class="team-table-data"></tbody>
    </table>
`;

const teamTableData = teamStandingsObjectArray.map((team) => {
    const content = document.createElement('tr');
    content.innerHTML = `
        <td>${team.position}</td>
        <td>${team.team}</td>
        <td>${team.points}</td>
    `;
    return content;
});

document.querySelector(".standings-table > div").append(teamTable);
teamTableData.forEach(team => {
    document.querySelector('.team-table-data').append(team);
});

const driverButton = document.querySelector('.driver-button');
const teamButton = document.querySelector('.team-button');

driverButton.addEventListener('click', () => openTable('driver', true));
teamButton.addEventListener('click', () => openTable('team', false));

const openTable = (tableName, tabActive) => {
    const tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(table => table.style.display = "none");

    document.getElementById(tableName).style.display = "";

    if (tabActive) {
        driverButton.style.backgroundColor = "#d0d0d2";
        teamButton.style.backgroundColor = "";
    } else {
        driverButton.style.backgroundColor = "";
        teamButton.style.backgroundColor = "#d0d0d2";
    }
}
  
document.getElementById("default-open").click();





