export function priceOrder(order) {
  const basePrice = order.basePrice;
  const discount = order.discount;
  const shippingCost = order.shippingCose;
  const price = basePrice - discount + shippingCost;
  return price;
}

class Order {
  #product;
  #quantity;
  #shippingMethod;
  constructor(product, quantity, shippingMethod) {
    this.#product = product;
    this.#quantity = quantity;
    this.#shippingMethod = shippingMethod;
  }

  get basePrice() {
    return this.#product.basePrice * this.#quantity;
  }

  get discount() {
    return (
      Math.max(this.#quantity - this.#product.discountThreshold, 0) *
      this.#product.basePrice *
      this.#product.discountRate
    );
  }

  get shippingPerCase() {
    return this.basePrice > this.#shippingMethod.discountThreshold
      ? this.#shippingMethod.discountedFee
      : this.#shippingMethod.feePerCase;
  }

  get shippingCose() {
    return this.shippingPerCase * this.#quantity;
  }
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(new Order(product, 10, shippingMethod));
console.log(price);
