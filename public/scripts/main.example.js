/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
//elementIdFilterCar
const btnSearchCar = document.getElementById("btn-search-car");
// Coba olah data ini hehe :)
console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init().then(app.run);

//Tombol Filter diklik
btnSearchCar.addEventListener("click", (event) => {
  console.log("Proses Filter!");
  event.preventDefault();

  const typeDriver = document.getElementById("type-driver");
  const dateCar = document.getElementById("date-car");
  const pickTime = document.getElementById("pick-time");
  const totalPassenger = document.getElementById("total-passenger");

  //validation
  if (typeDriver.value == "") {
    alert("Tipe Driver harus diisi!");
    return;
  }

  if (dateCar.value == "") {
    alert("Tanggal harus diisi!");
    return;
  }

  if (pickTime.value == "") {
    alert("Waktu harus diisi!");
    return;
  }

  let dateFilter = dateCar.value + "T" + pickTime.value;
  let driverFilter = typeDriver.value == "dengan-sopir" ? 0 : 1;

  let filter = (value) => {
    let result =
      driverFilter == value.typeDriver &&
      Date.parse(dateFilter) >= value.availableAt;
    if (totalPassenger.value != "") {
      result = result && value.capacity >= parseInt(totalPassenger.value);
    }
    return result;
  };

  app.clear();
  app.init(filter).then(app.run);
});
