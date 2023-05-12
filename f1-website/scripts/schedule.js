import {pastRacesObjectArray, nextRacesObjectArray} from "./schedule-data.js"

const pastRaces = pastRacesObjectArray.map((round) => {
    const pastRacesContent = document.createElement('div');
    pastRacesContent.innerHTML = `
        <h4>${round.title}</h4>
        <div class="flex">
            <div>
                <h2>${round.date.days}</h2>
                <h2>${round.date.month}</h2>
            </div>
            <img src=${round.flag.image} alt=${round.flag.description} width="46" class="flag">
        </div>
        <hr class="bkg-black">
        <h2>${round.location}</h2>
        <h3>${round.race}</h3>
        <hr class="bkg-black">
        <img src=${round.track.image} alt=${round.track.description} width="298">
    `;

    return(pastRacesContent);
});

const nextRaces = nextRacesObjectArray.map((round) => {
    const nextRacesContent = document.createElement('div');
    nextRacesContent.innerHTML = `
        <h4>${round.title}</h4>
        <div class="flex">
            <div>
                <h2>${round.date.days}</h2>
                <h2>${round.date.month}</h2>
            </div>
            <img src=${round.flag.image} alt=${round.flag.description} width="46" class="flag">
        </div>
        <hr class="bkg-black">
        <h2>${round.location}</h2>
        <h3>${round.race}</h3>
        <hr class="bkg-black">
        <div class="bkg-grid">
            <img src=${round.track.image} alt=${round.track.description} width="144">
        </div>
    `;

    return(nextRacesContent);
});

const pastRacesDiv = document.createElement('div');
pastRacesDiv.classList.add("races","grid");

const nextRacesDiv = document.createElement('div');
nextRacesDiv.classList.add("races","grid");

pastRaces.forEach(race => {
    pastRacesDiv.append(race);
});

nextRaces.forEach(race => {
    nextRacesDiv.append(race);
});

document.querySelector('.past-races').append(pastRacesDiv);
document.querySelector('.next-races').append(nextRacesDiv);


