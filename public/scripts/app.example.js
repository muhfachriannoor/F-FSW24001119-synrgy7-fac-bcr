class App {
  constructor() {
    //this.clearButton = document.getElementById("clear-btn");
    //this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init(filterer) {
    await this.load(filterer);

    // Undisabled Button Search Car
    const btnSearchCar = document.getElementById("btn-search-car");
    const typeDriver = document.getElementById("type-driver");
    const dateCar = document.getElementById("date-car");
    const pickTime = document.getElementById("pick-time");

    typeDriver.onchange = (e) => {
      if (e.target.value != "" && dateCar.value != "" && pickTime.value != "") {
        btnSearchCar.removeAttribute("disabled");
      }
    };

    dateCar.onchange = (e) => {
      if (
        typeDriver.value != "" &&
        e.target.value != "" &&
        pickTime.value != ""
      ) {
        btnSearchCar.removeAttribute("disabled");
      }
    };

    pickTime.onchange = (e) => {
      if (
        e.target.value != "" &&
        typeDriver.value != "" &&
        dateCar.value != ""
      ) {
        btnSearchCar.removeAttribute("disabled");
      }
    };

    // Register click listener
    //this.clearButton.onclick = this.clear;
    //this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(filterer) {
    const cars = await Binar.listCars(filterer);
    Car.init(cars);
    console.log(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
