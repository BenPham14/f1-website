class Calendar {
    constructor (
        title,
        days,
        month,
        flagImage,
        flagDescription,
        location,
        race,
        trackImage,
        trackDescription
    ) {
        this.title = title;
        this.date = {
            days: days,
            month: month
        };
        this.month = month;
        this.flag = {
            image: flagImage,
            description: flagDescription
        };
        this.location = location;
        this.race = race;
        this.track = {
            image: trackImage,
            description: trackDescription
        };
    }
};

const testing = new Calendar(
    "TESTING",
    "23-25",
    "FEB",
    "assets/bahrain-flag.webp",
    "Bahrain Flag",
    "Sakhir",
    "FORMULA 1 ARAMCO PRE-SEASON TESTING 2023",
    "assets/schedule_testing.webp",
    "Pre-season"
);

const round1 = new Calendar(
    "ROUND 1",
    "03-05",
    "MAR",
    "assets/bahrain-flag.webp",
    "Bahrain Flag",
    "Bahrain",
    "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023",
    "assets/schedule_testing.webp",
    "Pre-season"
);

const round2 = new Calendar(
    "ROUND 2",
    "17-19",
    "MAR",
    "assets/saudi-arabia-flag.webp",
    "Saudi Arabia Flag",
    "Saudi Arabia",
    "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023",
    "assets/schedule_testing.webp",
    "Pre-season"
);

const round3 = new Calendar(
    "ROUND 3",
    "31-02",
    "MAR-APR",
    "assets/australia-flag.webp",
    "Australia Flag",
    "Australia",
    "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2023",
    "assets/schedule_testing.webp",
    "Pre-season"
);

const round5 = new Calendar(
    "ROUND 5",
    "05-07",
    "MAY",
    "assets/united-states-flag.webp",
    "United States Flag",
    "United States",
    "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023",
    "assets/Miami-carbon.webp",
    "Miami Track"
);

const round6 = new Calendar(
    "ROUND 6",
    "19-21",
    "MAY",
    "assets/italy-flag.webp",
    "Italy Flag",
    "Italy",
    "FORMULA 1 QATAR AIRWAYS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2023",
    "assets/Emilia-Romagna-carbon.webp",
    "Emilia Romagna Track"
);

const round7 = new Calendar(
    "ROUND 7",
    "26-28",
    "MAY",
    "assets/monaco-flag.webp",
    "Monaco Flag",
    "Monaco",
    "FORMULA 1 GRAND PRIX DE MONACO 2023",
    "assets/Monaco-carbon.webp",
    "Monaco Track"
);

const round8 = new Calendar(
    "ROUND 8",
    "02-04",
    "JUN",
    "assets/spain-flag.webp",
    "Spain Flag",
    "Spain",
    "FORMULA 1 AWS GRAN PREMIO DE ESPANA 2023",
    "assets/Spain-carbon.webp",
    "Spain Track"
);

const round9 = new Calendar(
    "ROUND 9",
    "16-18",
    "JUN",
    "assets/canada-flag.webp",
    "Canada Flag",
    "Canada",
    "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023",
    "assets/Canada-carbon.webp",
    "Canada Track"
);

const round10 = new Calendar(
    "ROUND 10",
    "30-02",
    "JUN-JUL",
    "assets/austria-flag.webp",
    "Austria Flag",
    "Austria",
    "FORMULA 1 GROSSER PREIS VON OSTERREICH 2023",
    "assets/Austria-carbon.webp",
    "Austria Track"
);

const round11 = new Calendar(
    "ROUND 11",
    "07-09",
    "JUL",
    "assets/great-britain-flag.webp",
    "Britain Flag",
    "Great Britain",
    "FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023",
    "assets/Great-Britain-carbon.webp",
    "Great Britain Track"
);

const round12 = new Calendar(
    "ROUND 12",
    "21-23",
    "JUL",
    "assets/hungary-flag.webp",
    "Hungary Flag",
    "Hungary",
    "FORMULA 1 UNITED AIRWAYS HUNGARIAN GRAND PRIX 2023",
    "assets/Hungary-carbon.webp",
    "Hungary Track"
);

const round13 = new Calendar(
    "ROUND 13",
    "28-30",
    "JUL",
    "assets/belgium-flag.webp",
    "Belgium Flag",
    "Belgium",
    "FORMULA 1 BELGIAN GRAND PRIX 2023",
    "assets/Belgium-carbon.webp",
    "Belgium Track"
);

const round14 = new Calendar(
    "ROUND 14",
    "25-27",
    "AUG",
    "assets/netherlands-flag.webp",
    "Netherlands Flag",
    "Netherlands",
    "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023",
    "assets/Netherlands-carbon.webp",
    "Netherlands Track"
);

const round15 = new Calendar(
    "ROUND 15",
    "01-03",
    "SEP",
    "assets/italy-flag.webp",
    "Italy Flag",
    "Italy",
    "FORMULA 1 PIRELLI GRAN PREMIO D'ITALIA 2023",
    "assets/Italy-carbon.webp",
    "Italy Track"
);

const round16 = new Calendar(
    "ROUND 16",
    "15-17",
    "SEP",
    "assets/singapore-flag.webp",
    "Singapore Flag",
    "Singapore",
    "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
    "assets/Singapore-carbon.webp",
    "Singapore Track"
);

const round17 = new Calendar(
    "ROUND 17",
    "22-24",
    "SEP",
    "assets/japan-flag.webp",
    "Japan Flag",
    "Japan",
    "FORMULA 1 LENOVO JAPANESE GRAND PRIX 2023",
    "assets/Japan-carbon.webp",
    "Japan Track"
);

const round18 = new Calendar(
    "ROUND 18",
    "06-08",
    "OCT",
    "assets/bahrain-flag.webp",
    "Bahrain Flag",
    "Qatar",
    "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2023",
    "assets/Qatar-carbon.webp",
    "Qatar Track"
);

const round19 = new Calendar(
    "ROUND 19",
    "20-22",
    "OCT",
    "assets/united-states-flag.webp",
    "United States Flag",
    "United States",
    "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    "assets/United-States-carbon.webp",
    "United States Track"
);

const round20 = new Calendar(
    "ROUND 20",
    "27-29",
    "OCT",
    "assets/mexico-flag.webp",
    "Mexico Flag",
    "Mexico",
    "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MEXICO 2023",
    "assets/Mexico-carbon.webp",
    "Mexico Track"
);

const round21 = new Calendar(
    "ROUND 21",
    "03-05",
    "NOV",
    "assets/brazil-flag.webp",
    "Brazil Flag",
    "Brazil",
    "FORMULA 1 ROLEX GRANDE PREMIO DE SAO PAULO 2023",
    "assets/Brazil-carbon.webp",
    "Brazil Track"
);

const round22 = new Calendar(
    "ROUND 22",
    "16-18",
    "NOV",
    "assets/united-states-flag.webp",
    "United States Flag",
    "United States",
    "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2023",
    "assets/Las-Vegas-carbon.webp",
    "Las Vegas Track"
);

const round23 = new Calendar(
    "ROUND 23",
    "24-26",
    "NOV",
    "assets/abu-dhabi-flag.webp",
    "Abu Dhabi Flag",
    "Abu Dhabi",
    "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023",
    "assets/Abu-Dhabi-carbon.webp",
    "Abu Dhabi Track"
);

const pastRacesObjectArray = [testing, round1, round2, round3];
const nextRacesObjectArray = [round5, round6, round7, round8, round9, round10, round11, round12, round13, round14, round15, round16, round17, round18, round19, round20, round21, round22, round23];

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


