// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/** Color data */
const yellow = "Yellow";
const pink = "Pink";
const white = "White";
const purple = "Purple";
const blue = "Blue";
const black = "Black";
const grey = "Grey";

/** Resto data */
const bento = "Bento";
const sushi = "Sushi";
const pancake = "Pancake";
const eggy = "Eggy";
const tempura = "Tempura";
const padang = "Padang";
const tteok = "Tteok";
const katsu = "Katsu";
const geprek = "Geprek";

/** todo Monica property */
let setColorMonica = new Set();
setColorMonica.add(yellow);
setColorMonica.add(pink);
setColorMonica.add(white);
setColorMonica.add(purple);


let setRestoMonica = new Set();
setRestoMonica.add(bento);
setRestoMonica.add(sushi);
setRestoMonica.add(pancake);
setRestoMonica.add(eggy);
setRestoMonica.add(tempura);
setRestoMonica.add(bento);
setRestoMonica.add(eggy);
setRestoMonica.add(padang);
setRestoMonica.add(tteok);
setRestoMonica.add(sushi);
setRestoMonica.add(sushi);

 
const educationMonica = [
    { name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" }
];

/** todo Wendy Property */
const arrColorWendy = ["Blue", "Black", "Grey"];
const arrRestoWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]; 

let setColorWendy = new Set();
setColorWendy.add(blue);
setColorWendy.add(black);
setColorWendy.add(grey);


let setRestoWendy = new Set();
setRestoWendy.add(tempura);
setRestoWendy.add(bento);
setRestoWendy.add(sushi);
setRestoWendy.add(pancake);
setRestoWendy.add(padang);
setRestoWendy.add(katsu);
setRestoWendy.add(geprek);
setRestoWendy.add(pancake);
setRestoWendy.add(eggy);


const educationWendy = [
    { name: "SD 02", city: "Jakarta", graduate: "2010" },
    { name: "SMP 03", city: "Bogor", graduate: "2013" },
    { name: "SMA 01", city: "Surabaya", graduate: "2016" },
    { name: "Universitas Maju", city: "Tangerang" }
];

/** todo data input */

//monica
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: setColorMonica,
    isHavePet: "Yes",
    education: educationMonica,
    favoriteRestaurant: setRestoMonica
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: setColorWendy,
    isHavePet: "No",
    education: educationWendy,
    favoriteRestaurant: setRestoWendy
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};