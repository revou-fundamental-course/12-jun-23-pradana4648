//
// Element
//
const inputSuhuEl = document.getElementById("input-suhu");
const inputFahrenheitEl = document.getElementById("input-fahrenheit");
const inputKelvinEl = document.getElementById("input-kelvin");
const inputReamureEl = document.getElementById("input-reamur");
const caraKalkulasiEl = document.getElementById("cara-kalkulasi");
const errorEl = document.getElementById("pesan-error");

//
// Variables
//
let isError = false;
let inputSuhuValue = 0;
let isReversed = false;

//
// Validate input
//
inputSuhuEl.addEventListener("keyup", function(event) {
  console.log(event.target.value);
  var result = /[^0-9]/g.test(event.target.value);
  if (result) {
    isError = true;
    errorEl.style.display = "block";
    errorEl.innerText = "* Wajib angka saja";
  } else {
    isError = false;
    errorEl.style.display = "none";
    inputSuhuValue = new Number(event.target.value);
  }
});

//
// Action
//
function caraKalkulasi() {
  const formatKalkulasi = `
1. Fahrenheit = (9 / 5) * ${inputSuhuValue}°C + 32 = ${konversiKeFahrenheit(
    inputSuhuValue
  )}°F
2. Kelvin     = ${inputSuhuValue}°C + 273.15       = ${konversiKeKelvin(
    inputSuhuValue
  )}°K
3. Reamur     = (4 / 5) * ${inputSuhuValue}°C      = ${konversiKeReamur(
    inputSuhuValue
  )}°R
`;
  caraKalkulasiEl.value = formatKalkulasi;
}

function konversikan() {
  if (!isError) {
    inputFahrenheitEl.value = konversiKeFahrenheit(inputSuhuValue);
    inputKelvinEl.value = konversiKeKelvin(inputSuhuValue);
    inputReamureEl.value = konversiKeReamur(inputSuhuValue);
    caraKalkulasi();
  } else {
    errorEl.style.display = "block";
    errorEl.innerText = "* Tidak bisa melakukan konversi";
  }
}

function reset() {
  inputFahrenheitEl.value = "";
  inputSuhuEl.value = "";
  inputKelvinEl.value = "";
  inputReamureEl.value = "";
  caraKalkulasiEl.value = "";
}

function konversiKeFahrenheit(input = 0) {
  if (!input) {
    throw Error("Input tidak ada");
  }
  return ((9 / 5) * input + 32).toFixed(2);
}

function konversiKeReamur(input = 0) {
  if (!input) {
    throw Error("Input tidak ada");
  }
  return ((4 / 5) * input).toFixed(2);
}

function konversiKeKelvin(input = 0) {
  if (!input) {
    throw Error("Input tidak ada");
  }
  return (input + 273.15).toFixed(2);
}
