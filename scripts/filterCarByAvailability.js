function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  Array.prototype.filterAvaibleTrue = function () {
    for (let i = 0; i < this.length; i++) {
      if (this[i].available === true) {
        result.push(this[i]);
      }
    }
  };
  cars.filterAvaibleTrue();

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
