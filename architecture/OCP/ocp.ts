interface Discount {
  calculateAmount(baseAmount: number): number;
}

class ElectronicsDiscount implements Discount {
  calculateAmount(baseAmount: number): number {
    return baseAmount * 0.9;
  }
}

class PixDiscount implements Discount {
  calculateAmount(baseAmount: number): number {
    return baseAmount * 0.95;
  }
}

class PaymentProcessor {
  calculateFinalPrice(amount: number, discount: Discount): number {
    return discount.calculateAmount(amount);
  }
}

const processor = new PaymentProcessor();

const orders = [
  { amount: 50, discount: new PixDiscount() },
  { amount: 20, discount: new ElectronicsDiscount() },
];

orders.forEach(order => {
  console.log(
    `Price: ${processor.calculateFinalPrice(order.amount, order.discount)}`
  );
});
