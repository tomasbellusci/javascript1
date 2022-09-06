const monedaUno = document.getElementById("moneda-uno");
const monedaDos =  document.getElementById("moneda-dos");
const cantidadUno = document.getElementById("cantidad-uno");
const cantidadDos = document.getElementById("cantidad-dos");
const cambio_uno  =  document.getElementById("cambio");
const taza_uno = document.getElementById("taza");




//update DOM
function  calculate(){
    const  moneda_uno =monedaUno.value;
    const moneda_dos =monedaDos.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_uno}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_dos];
       
       

       cantidadDos.value = (cantidadUno.value * taza);

    });
    
}
//Event listener
monedaUno.addEventListener("change",calculate);
cantidadUno.addEventListener("input",calculate);
monedaDos.addEventListener("change",calculate);
cantidadDos.addEventListener("input",calculate);

taza_uno.addEventListener("click", () => {
    const temporal = monedaUno.value;
    monedaUno.value =monedaDos.value;
    monedaDos.value = temporal;
    calculate()
});

calculate();