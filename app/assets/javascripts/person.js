var Person = function(firstName, lastName, age, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * (200 - 150 + 1)) + 150;
  this.friends = friends || [];
};

Person.prototype = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

me = new Person('Max', 'Kohl', 25, 95, 188);
