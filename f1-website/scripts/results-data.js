class Drivers {
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

class Teams {
    constructor (
        position,
        team,
        points,
        driver1,
        driver2,
        logo,
        logoAlt,
        car,
        carImageAlt,
        color
    ) {
        this.position = position;
        this.team = team;
        this.points = points;
        this.driver1 = driver1;
        this.driver2 = driver2;
        this.logoImage = {
            image: logo,
            alt: logoAlt
        };
        this.carImage = {
            image: car,
            alt: carImageAlt
        };
        this.color = color;
    }
};

/** Drivers **/

const ver = new Drivers (
    1,
    "Max Verstappen",
    "NED",
    "RED BULL RACING HONDA RBPT",
    69,
    "assets/maxver01.webp"
);

const per = new Drivers (
    2,
    "Sergio Perez",
    "MEX",
    "RED BULL RACING HONDA RBPT",
    54,
    "assets/serper01.webp"
);

const alo = new Drivers (
    3,
    "Fernando Alonso",
    "ESP",
    "ASTON MARTIN ARAMCO MERCEDES",
    45,
    "assets/feralo01.webp"
);

const ham = new Drivers (
    4,
    "Lewis Hamilton",
    "GBR",
    "MERCEDES",
    38,
    "assets/lewham01.webp"
);

const sai = new Drivers (
    5,
    "Carlos Sainz",
    "ESP",
    "FERRARI",
    20,
    "assets/carsai01.webp"
);

const str = new Drivers (
    6,
    "Lance Stroll",
    "CAN",
    "ASTON MARTIN ARAMCO MERCEDES",
    20,
    "assets/lanstr01.webp"
);

const rus = new Drivers (
    7,
    "George Russell",
    "GBR",
    "MERCEDES",
    18,
    "assets/georus01.webp"
);

const nor = new Drivers (
    8,
    "Lando Norris",
    "GBR",
    "MCLAREN MERCEDES",
    8,
    "assets/lannor01.webp"
);

const hul = new Drivers (
    9,
    "Nico Hulkenberg",
    "GER",
    "HAAS FERRARI",
    6,
    "assets/nichul01.webp"
);

const lec = new Drivers (
    10,
    "Charles Leclerc",
    "MON",
    "FERRARI",
    6,
    "assets/chalec01.webp"
);

const bot = new Drivers (
    11,
    "Valtteri Bottas",
    "FIN",
    "ALFA ROMEO FERRARI",
    4,
    "assets/valbot01.webp"
);

const pia = new Drivers (
    12,
    "Oscar Piastri",
    "AUS",
    "MCLAREN MERCEDES",
    4,
    "assets/oscpia01.webp"
);

const oco = new Drivers (
    13,
    "Esteban Ocon",
    "FRA",
    "ALPINE RENAULT",
    4,
    "assets/estoco01.webp"
);

const gas = new Drivers (
    14,
    "Pierre Gasly",
    "FRA",
    "ALPINE RENAULT",
    4,
    "assets/piegas01.webp"
);

const gua = new Drivers (
    15,
    "Zhou Guanyu",
    "CHN",
    "ALFA ROMEO FERRARI",
    2,
    "assets/guazho01.webp"
);

const tsu = new Drivers (
    16,
    "Yuki Tsunoda",
    "JPN",
    "ALPHATAURI HONDA RBPT",
    1,
    "assets/yuktsu01.webp"
);

const mag = new Drivers (
    17,
    "Kevin Magnussen",
    "DEN",
    "HAAS FERRARI",
    1,
    "assets/kevmag01.webp"
);

const alb = new Drivers (
    18,
    "Alex Albon",
    "THA",
    "WILLIAMS MERCEDES",
    1,
    "assets/alealb01.webp"
);

const sar = new Drivers (
    19,
    "Logan Sargeant",
    "USA",
    "WILLIAMS MERCEDES",
    0,
    "assets/logsar01.webp"
);

const vri = new Drivers (
    20,
    "Nyck De Vries",
    "NED",
    "ALPHATAURI HONDA RBPT",
    0,
    "assets/nycdev01.webp"
);

/** Teams **/

const rb = new Teams (
    1,
    "RED BULL RACING HONDA RBPT",
    ver.points + per.points,
    ver,
    per,
    "assets/red-bull-racing-logo.webp",
    "Red Bull Logo",
    "assets/red-bull-racing.webp",
    "Red Bull Car",
    "#3671C6"
);

const amr = new Teams (
    2,
    "ASTON MARTIN ARAMCO MERCEDES",
    alo.points + str.points,
    alo,
    str,
    "assets/aston-martin-logo.webp",
    "Aston Martin Logo",
    "assets/aston-martin.webp",
    "Aston Martin Car",
    "#358C75"
);

const merc = new Teams (
    3,
    "MERCEDES",
    ham.points + rus.points,
    ham,
    rus,
    "assets/mercedes-logo.webp",
    "Mercedes Logo",
    "assets/mercedes.webp",
    "Mercedes Car",
    "#6CD3BF"
);

const fer = new Teams (
    4,
    "FERRARI",
    lec.points + sai.points,
    lec,
    sai,
    "assets/ferrari-logo.webp",
    "Ferrari Logo",
    "assets/ferrari.webp",
    "Ferrari Car",
    "#F91536"
);

const mcl = new Teams (
    5,
    "MCLAREN MERCEDES",
    nor.points + pia.points,
    nor,
    pia,
    "assets/mclaren-logo.webp",
    "Mclaren Logo",
    "assets/mclaren.webp",
    "Mclaren Car",
    "#F58020"
);

const alp = new Teams (
    6,
    "ALPINE RENAULT",
    gas.points + oco.points,
    gas,
    oco,
    "assets/alpine-logo.webp",
    "Alpine Logo",
    "assets/alpine.webp",
    "Alpine Car",
    "#2293D1"
);

const haas = new Teams (
    7,
    "HAAS FERRARI",
    mag.points + hul.points,
    mag,
    hul,
    "assets/haas-f1-team-logo.webp",
    "Haas Logo",
    "assets/haas-f1-team.webp",
    "Haas Car",
    "#B6BABD"
);

const alfa = new Teams (
    8,
    "ALFA ROMEO FERRARI",
    bot.points + gua.points,
    bot,
    gua,
    "assets/alfa-romeo-logo.webp",
    "Alfa Romeo Logo",
    "assets/alfa-romeo.webp",
    "Alfa Romeo Car",
    "#C92D4B"
);

const at = new Teams (
    9,
    "ALPHATAURI HONDA RBPT",
    tsu.points + vri.points,
    tsu,
    vri,
    "assets/alphatauri-logo.webp",
    "Alphatauri Logo",
    "assets/alphatauri.webp",
    "Alfatauri Car",
    "#5E8FAA"
);

const will = new Teams (
    10,
    "WILLIAMS MERCEDES",
    alb.points + sar.points,
    alb,
    sar,
    "assets/williams-logo.webp",
    "Williams Logo",
    "assets/williams.webp",
    "Williams Car",
    "#37BEDD"
);

const driversObjectArray = [ver, per, alo, ham, sai, str, rus, nor, hul, lec, bot, pia, oco, gas, gua, tsu, mag, alb, sar, vri];
const teamsObjectArray = [rb, amr, merc, fer, mcl, alp, haas, alfa, at, will]

export {driversObjectArray, teamsObjectArray};