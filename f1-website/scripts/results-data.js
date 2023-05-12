class DriverStandings {
    constructor (
        position,
        driver,
        nationality,
        car,
        points
    ) {
        this.position = position;
        this.driver = driver;
        this.nationality = nationality;
        this.car = car;
        this.points = points;
    }
};

// class TeamStandings {
//     constructor (
//         position,
//         team,
//         points
//     ) {
//         this.position = position;
//         this.team = team;
//         this.points = points;
//     }
// };

const ver = new DriverStandings (
    1,
    "Max Verstappen",
    "NED",
    "RED BULL RACING HONDA RBPT",
    69
);

const per = new DriverStandings (
    2,
    "Sergio Perez",
    "MEX",
    "RED BULL RACING HONDA RBPT",
    54
);

const alo = new DriverStandings (
    3,
    "Fernando Alonso",
    "ESP",
    "ASTON MARTIN ARAMCO MERCEDES",
    45
);

const ham = new DriverStandings (
    4,
    "Lewis Hamilton",
    "GBR",
    "MERCEDES",
    38
);

const sai = new DriverStandings (
    5,
    "Carlos Sainz",
    "ESP",
    "FERRARI",
    20
);

const str = new DriverStandings (
    6,
    "Lance Stroll",
    "CAN",
    "ASTON MARTIN ARAMCO MERCEDES",
    20
);

const rus = new DriverStandings (
    7,
    "George Russell",
    "GBR",
    "MERCEDES",
    18
);

const nor = new DriverStandings (
    8,
    "Lando Norris",
    "GBR",
    "MCLAREN MERCEDES",
    8
);

const hul = new DriverStandings (
    9,
    "Nico Hulkenberg",
    "GER",
    "HAAS FERRARI",
    6
);

const lec = new DriverStandings (
    10,
    "Charles Leclerc",
    "MON",
    "FERRARI",
    6
);

const bot = new DriverStandings (
    11,
    "Valtteri Bottas",
    "FIN",
    "ALFA ROMEO FERRARI",
    4
);

const pia = new DriverStandings (
    12,
    "Oscar Piastri",
    "AUS",
    "MCLAREN MERCEDES",
    4
);

const oco = new DriverStandings (
    13,
    "Esteban Ocon",
    "FRA",
    "ALPINE RENAULT",
    4
);

const gas = new DriverStandings (
    14,
    "Pierre Gasly",
    "FRA",
    "ALPINE RENAULT",
    4
);

const gua = new DriverStandings (
    15,
    "Zhou Guanyu",
    "CHN",
    "ALFA ROMEO FERRARI",
    2
);

const tsu = new DriverStandings (
    16,
    "Yuki Tsunoda",
    "JPN",
    "ALPHATAURI HONDA RBPT",
    1
);

const mag = new DriverStandings (
    17,
    "Kevin Magnussen",
    "DEN",
    "HAAS FERRARI",
    1
);

const alb = new DriverStandings (
    18,
    "Alex Albon",
    "THA",
    "WILLIAMS MERCEDES",
    1
);

const sar = new DriverStandings (
    19,
    "Logan Sargeant",
    "USA",
    "WILLIAMS MERCEDES",
    0
);

const vri = new DriverStandings (
    20,
    "Nyck De Vries",
    "NED",
    "ALPHATAURI HONDA RBPT",
    0
);

const standingsArray = [ver, per, alo, ham, sai, str, rus, nor, hul, lec, bot, pia, oco, gas, gua, tsu, mag, alb, sar, vri];

export default standingsArray;