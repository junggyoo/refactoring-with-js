function foundPerson(people) {
  const caditates = ['Don', 'John', 'Kent'];
  return people.find((p) => caditates.includes(p)) || '';
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
