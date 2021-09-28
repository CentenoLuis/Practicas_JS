class Company {
    constructor(name, category, start, end) {
        this.name = name;
        this.category = category;
        this.start = start;
        this.end = end;
    }
}

let company1 = new Company("Company1", "Finance", 1981, 2013);
let company2 = new Company("Company2", "Retail", 1992, 2008);
let company3 = new Company("Company3", "Finance", 1999, 2007);
let company4 = new Company("Company4", "Auto", 1989, 2011);
let company5 = new Company("Company5", "Technology", 2009, 2014);
let company6 = new Company("Company6", "Auto", 1987, 2010);
let company7 = new Company("Company7", "Finance", 1986, 1996);
let company8 = new Company("Company8", "Technology", 2011, 2022);
let company9 = new Company("Company9", "Retail", 1981, 2003);
let company10 = new Company("Company10", "Finance", 1981, 2003);

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

companies.push(company1);
companies.push(company2);
companies.push(company3);
companies.push(company4);
companies.push(company5);
companies.push(company6);
companies.push(company7);
companies.push(company8);
companies.push(company9);
companies.push(company10);

//forEach()_____________________________
//forEach()_____________________________
//forEach()_____________________________
console.log("Array de compañias");
companies.forEach(function (item) {
    console.log(item);
})

//filter()_________________________________
//filter()_________________________________
//filter()_________________________________
console.log("Compañias de Finance");

/* let companiesFinance = companies.filter(function (item) {
    if (item.category == "Finance") return item;
}) */

let companiesFinance = companies.filter(item => {
    if (item.category == "Finance") return item;
})

companiesFinance.forEach(item => console.log(item))

console.log("Compañias de Retail");

let companiesRetail = companies.filter(item => {
    if (item.category == "Retail") return item;
})

companiesRetail.forEach(item => console.log(item))

//map()_________________________________________
//map()_________________________________________
//map()_________________________________________

console.log("______________________________________________________________________________");
console.log("Ahora le añadimos !!! al  string de categoria de cada item con companies.map()");
console.log("______________________________________________________________________________");
let companiesCopy = companies.map(item => item.category += "!!!");
companiesCopy.forEach(item => console.log(`${item}`));

//sort()____________________________________
//sort()____________________________________
//sort()____________________________________
let companiesSortedByEnd = companies.sort((a, b) => a.end > b.end ? -1 : 1);
companiesSortedByEnd.forEach(item => {
    console.log(item.end);
})

//reduce()__________________________________
//reduce()__________________________________
//reduce()__________________________________
console.log("______________________________________________________________________________");
console.log("Ahora sumamos la edad de cada compañia con companies.reduce()");
console.log("______________________________________________________________________________");
let totalYears = companies.reduce((total, a) => {
    return total + (a.end - a.start)
}, 0);
console.log(`El total de años es: ${totalYears}`);
