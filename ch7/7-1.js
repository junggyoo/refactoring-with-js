class Organization {
  #name;
  #country;
  #data;

  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get rawData() {
    return { ...this.#data }; // 얕은 복사
  }
}

const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
});

console.log(organization.name);
console.log(organization.country);
