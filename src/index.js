class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = function (left, right) {
      return left - right
    };
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    let temp = [];

    for(let i=0; i<indices.length; i++){
      temp.push(this.arr[indices[i]]);
    }

    temp.sort(this.compareFunction);

    indices.sort(function(left, right){
      return left - right
    });

    for(let j=0; j<indices.length; j++){
      this.arr.splice(indices[j], 1, temp[j]);
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;