//Converting temperatures from kelvin to celsius, fahrenheight, or newton
const kelvin = 0;

const celsius = kelvin - 273;

const fahrenheight = Math.floor(celsius * (9/5) + 32);

const newton = Math.floor(celsius * (33/100));
console.log(`The temoperature is ${newton} degrees Newton.`);
