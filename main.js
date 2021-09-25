console.log("hola consola!");
class Worker {
    constructor(name, age, phone, speciality, address = [], yearsOfExp) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.speciality = speciality;
        this.address = address;
        this.yearsOfExp = yearsOfExp;
    }

    addAddress(street, numberOfHouse, province, barrio) {
        this.address.push({
            "street": street,
            "numberOfHouse": numberOfHouse,
            "province": province,
            "barrio": barrio
        });
    }
    get theYearsOfExp() {
        return `Years of experience of ${this.name} is ${this.yearsOfExp} years`;
    }

    get theAddress() {
        return `His/Her current address is ${this.address[0].street} Numero ${this.address[0].numberOfHouse}, ${this.address[0].province}.`
    }

    set thePhone(phone) {
        this.phone = phone;
    }

    set theAddress([street, numberOfHouse, barrio, province]) {
        this.address.street = street;
        this.address.numberOfHouse = numberOfHouse;
        this.address.barrio = barrio;
        this.address.province = province;
    }

    set theAge(age) {
        this.age = age;
    }

    set theSpeciality(speciality) {
        this.speciality = speciality;
    }
    set theYearsOfExp(yearsOfExp) {
        this.yearsOfExp = yearsOfExp;
    }

}
let workers = [];

let worker1 = new Worker("Luis", 32, 1128184047, "Software Developer", [], 5);
worker1.addAddress("Diaz Colodrero", 2328, "CABA", "Villa Urquiza");
workers.push(worker1);

let worker2 = new Worker("Dani", 29, 1128184047, "React Developer", [], 6);
worker2.addAddress("Mexico", 3328, "CABA", "Monserrat");
workers.push(worker2);

let worker3 = new Worker("Olga", 30, 1163554228, "Software Developer", [], 4);
worker3.addAddress("Diaz Colodrero", 2328, "CABA", "Villa Urquiza");
workers.push(worker3);

let worker4 = new Worker("Daniel", 33, 11123456789, "Javascript Developer", [], 6);
worker4.addAddress("Florida", 5526, "CABA", "Microcentro");
workers.push(worker4);

console.log(workers);
console.log(worker1.theYearsOfExp + " and " + worker1.theAddress);
worker1.thePhone = 1188881080;
worker1.theAddress = (["Diaz Colodrero", 2326, "USA", "Villa Urquiza2"]);
worker1.theAge = 1080;
worker1.theSpeciality = "JS Developer";
worker1.theYearsOfExp = 9;
