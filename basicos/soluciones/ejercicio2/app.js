const nombre = "Ana";
let edad = 20;
const estudiante = true;
edad += 1;
document.querySelector("#salida").textContent = `Nombre: ${nombre} | Edad: ${edad} | Estudiante: ${estudiante}`;
console.log(typeof nombre, typeof edad, typeof estudiante);
