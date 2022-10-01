
let masina1 = {
    marca: "dacia",
    model: "logan",
    an: 1998,
    motor: 3.2,
    geam: "securizat",
    parbriz: "incalzit",
    impozit: 2800,
    pret: 1500
}

let masina2 = {
    marca: "dacia",
    model: "sander0",
    an: 2002,
    motor: 5.7,
    geam: "blindat",
    parbriz: "fara parbriz",
    impozit: 8800,
    pret: 1700
}

let masina3 = {
    marca: "dacia",
    model: "superNova",
    an: 2019,
    motor: 1.2,
    geam: "securizat",
    parbriz: "incalzit",
    impozit: 80,
    pret: 1900
}

let masina4 = {
    marca: "dacia",
    model: "Papuc",
    an: 1889,
    motor: 4.2,
    geam: "fara geam",
    parbriz: "incalzit",
    impozit: 4800,
    pret: 2300
}

let masina5 = {
    marca: "renault",
    model: "megane",
    an: 1993,
    motor: 3.2,
    geam: "fara geam",
    parbriz: "incalzit",
    impozit: 2800,
    pret: 2900
}

let masina6 = {
    marca: "citroen",
    model: "xsara",
    an: 2003,
    motor: 1.2,
    geam: "geam securizat",
    parbriz: "neincalzit",
    impozit: 500,
    pret: 3200
}

let masina7 = {
    marca: "bmw",
    model: "2series",
    an: 2011,
    motor: 2.5,
    geam: "geam secuzirat",
    parbriz: "incalzit",
    impozit: 1800,
    pret: 4500
}

let masina8 = {
    marca: "audi",
    model: "A6",
    an: 2015,
    motor: 3.0,
    geam: "geam blindat",
    parbriz: "incalzit",
    impozit: 2500,
    pret: 17500
}

let masina9 = {
    marca: "audi",
    model: "a4",
    an: 2013,
    motor: 2.0,
    geam: "fara geam",
    parbriz: "neincalzit",
    impozit: 1500,
    pret: 9800
}

let masina10 = {
    marca: "bmw",
    model: "3series",
    an: 2014,
    motor: 3.5,
    geam: "fara geam",
    parbriz: "incalzit",
    impozit: 3500,
    pret: 12300
}




//totd functie ce primeste ca prametru 2 masini si returneaza masina mai noua

function compare(x, y) {

    if (x.an > y.an) {

        return x;
    } else if (x.an < y.an) {

        return y;
    } else {

        return "acealsi an";
    }

}


// functie ce primeste 3 masini si o returneaza pe cea mai noua 

function compara(x, y, k) {

    if (x.an > y.an && x.an > k.an) {
        return x;
    } else if (y.an > x.an && y.an > k.an) {
        return y;
    } else return k;

}


//functie ce primeste un parametru o  masina si ne retunreazqa daca masian este  mai veche de 10 ani


function Rabla(x) {

    let minim = 2012;

    if (x.an < minim) {
        return true;
    } else return false;

}

//array  de obiecte


let masini = [masina1, masina2, masina3, masina4, masina5, masina6, masina7, masina8, masina9, masina10];


//functie ce primeste ca parametru un vector si afiseaza elementele vectorului 



function afiseaza(arr) {


    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].marca);
    }
}



//functie ce returenaza marca masinii cea mai scumpa

function ceaMaiScumpa(arr) {

    let masinaPretMaxim = arr[0];


    for (let i = 0; i <arr.length; i++) {

        if (arr[i].pret > masinaPretMaxim.pret) {
            masinaPretMaxim = arr[i];
        }

    
    }


    return masinaPretMaxim.marca;

}



//functie ce  primeste ca parmateru marca si un vector si verifica daca exista marca respectiva


function verificareMarca (arr, x) {

x = arr[0].marca
let sum = 0;

for (i = 0; i < arr.length; i++) {

    if ( x == arr[i].marca) {
        sum++;
        return true; 

    } else return false;
}

console.log(`In total sunt ${sum} masini marca `+ arr[i].marca)

}