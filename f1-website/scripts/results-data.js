class DriverStandings {
    constructor (
        position,
        driver,
        nationality,
        car,
        points,
        image
    ) {
        this.position = position;
        this.driver = driver;
        this.nationality = nationality;
        this.car = car;
        this.points = points;
        this.image = image;
    }
};

class TeamStandings {
    constructor (
        position,
        team,
        points,
        driver1,
        driver2,
        logo,
        logoAlt,
        car,
        carImageAlt
    ) {
        this.position = position;
        this.team = team;
        this.points = points;
        this.driver1 = driver1;
        this.driver2 = driver2;
        this.logoImage = {
            image: logo,
            alt: logoAlt
        }
        this.carImage = {
            image: car,
            alt: carImageAlt
        }
    }
};

const ver = new DriverStandings (
    1,
    "Max Verstappen",
    "NED",
    "RED BULL RACING HONDA RBPT",
    69,
    "assets/maxver01.webp"
);

const per = new DriverStandings (
    2,
    "Sergio Perez",
    "MEX",
    "RED BULL RACING HONDA RBPT",
    54,
    "assets/serper01.webp"
);

const alo = new DriverStandings (
    3,
    "Fernando Alonso",
    "ESP",
    "ASTON MARTIN ARAMCO MERCEDES",
    45,
    "assets/feralo01.webp"
);

const ham = new DriverStandings (
    4,
    "Lewis Hamilton",
    "GBR",
    "MERCEDES",
    38,
    "assets/lewham01.webp"
);

const sai = new DriverStandings (
    5,
    "Carlos Sainz",
    "ESP",
    "FERRARI",
    20,
    "assets/carsai01.webp"
);

const str = new DriverStandings (
    6,
    "Lance Stroll",
    "CAN",
    "ASTON MARTIN ARAMCO MERCEDES",
    20,
    "assets/lanstr01.webp"
);

const rus = new DriverStandings (
    7,
    "George Russell",
    "GBR",
    "MERCEDES",
    18,
    "assets/georus01.webp"
);

const nor = new DriverStandings (
    8,
    "Lando Norris",
    "GBR",
    "MCLAREN MERCEDES",
    8,
    "assets/lannor01.webp"
);

const hul = new DriverStandings (
    9,
    "Nico Hulkenberg",
    "GER",
    "HAAS FERRARI",
    6,
    "assets/nichul01.webp"
);

const lec = new DriverStandings (
    10,
    "Charles Leclerc",
    "MON",
    "FERRARI",
    6,
    "assets/chalec01.webp"
);

const bot = new DriverStandings (
    11,
    "Valtteri Bottas",
    "FIN",
    "ALFA ROMEO FERRARI",
    4,
    "assets/valbot01.webp"
);

const pia = new DriverStandings (
    12,
    "Oscar Piastri",
    "AUS",
    "MCLAREN MERCEDES",
    4,
    "assets/oscpia01.webp"
);

const oco = new DriverStandings (
    13,
    "Esteban Ocon",
    "FRA",
    "ALPINE RENAULT",
    4,
    "assets/estoco01.webp"
);

const gas = new DriverStandings (
    14,
    "Pierre Gasly",
    "FRA",
    "ALPINE RENAULT",
    4,
    "assets/piegas01.webp"
);

const gua = new DriverStandings (
    15,
    "Zhou Guanyu",
    "CHN",
    "ALFA ROMEO FERRARI",
    2,
    "assets/guazho01.webp"
);

const tsu = new DriverStandings (
    16,
    "Yuki Tsunoda",
    "JPN",
    "ALPHATAURI HONDA RBPT",
    1,
    "assets/yuktsu01.webp"
);

const mag = new DriverStandings (
    17,
    "Kevin Magnussen",
    "DEN",
    "HAAS FERRARI",
    1,
    "assets/kevmag01.webp"
);

const alb = new DriverStandings (
    18,
    "Alex Albon",
    "THA",
    "WILLIAMS MERCEDES",
    1,
    "assets/alealb01.webp"
);

const sar = new DriverStandings (
    19,
    "Logan Sargeant",
    "USA",
    "WILLIAMS MERCEDES",
    0,
    "assets/logsar01.webp"
);

const vri = new DriverStandings (
    20,
    "Nyck De Vries",
    "NED",
    "ALPHATAURI HONDA RBPT",
    0,
    "assets/nycdev01.webp"
);

const rb = new TeamStandings (
    1,
    "RED BULL RACING HONDA RBPT",
    ver.points + per.points,
    ver,
    per,
    "assets/red-bull-racing-logo.webp",
    "Red Bull Logo",
    "assets/red-bull-racing.webp",
    "Red Bull Car"
);

const amr = new TeamStandings (
    2,
    "ASTON MARTIN ARAMCO MERCEDES",
    alo.points + str.points,
    alo,
    str,
    "assets/aston-martin-logo.webp",
    "Aston Martin Logo",
    "assets/aston-martin.webp",
    "Aston Martin Car"
);

const merc = new TeamStandings (
    3,
    "MERCEDES",
    ham.points + rus.points,
    ham,
    rus,
    "assets/mercedes-logo.webp",
    "Mercedes Logo",
    "assets/mercedes.webp",
    "Mercedes Car"
);

const fer = new TeamStandings (
    4,
    "FERRARI",
    lec.points + sai.points,
    lec,
    sai,
    "assets/ferrari-logo.webp",
    "Ferrari Logo",
    "assets/ferrari.webp",
    "Ferrari Car"
);

const mcl = new TeamStandings (
    5,
    "MCLAREN MERCEDES",
    nor.points + pia.points,
    nor,
    pia,
    "assets/mclaren-logo.webp",
    "Mclaren Logo",
    "assets/mclaren.webp",
    "Mclaren Car"
);

const alp = new TeamStandings (
    6,
    "ALPINE RENAULT",
    gas.points + oco.points,
    gas,
    oco,
    "assets/alpine-logo.webp",
    "Alpine Logo",
    "assets/alpine.webp",
    "Alpine Car"
);

const haas = new TeamStandings (
    7,
    "HAAS FERRARI",
    mag.points + hul.points,
    mag,
    hul,
    "assets/haas-f1-team-logo.webp",
    "Haas Logo",
    "assets/haas-f1-team.webp",
    "Haas Car"
);

const alfa = new TeamStandings (
    8,
    "ALFA ROMEO FERRARI",
    bot.points + gua.points,
    bot,
    gua,
    "assets/alfa-romeo-logo.webp",
    "Alfa Romeo Logo",
    "assets/alfa-romeo.webp",
    "Alfa Romeo Car"
);

const at = new TeamStandings (
    9,
    "ALPHATAURI HONDA RBPT",
    tsu.points + vri.points,
    tsu,
    vri,
    "assets/alphatauri-logo.webp",
    "Alphatauri Logo",
    "assets/alphatauri.webp",
    "Alfatauri Car"
);

const will = new TeamStandings (
    10,
    "WILLIAMS MERCEDES",
    alb.points + sar.points,
    alb,
    sar,
    "assets/williams-logo.webp",
    "Williams Logo",
    "assets/williams.webp",
    "Williams Car"
);

const driverStandingsObjectArray = [ver, per, alo, ham, sai, str, rus, nor, hul, lec, bot, pia, oco, gas, gua, tsu, mag, alb, sar, vri];
const teamStandingsObjectArray = [rb, amr, merc, fer, mcl, alp, haas, alfa, at, will]

export {driverStandingsObjectArray, teamStandingsObjectArray};