import { Injectable } from '@nestjs/common';
import { AmountType } from '../order-bill/types/discount.type';

@Injectable()
export class MathService {
  private total = 0;

  setInitialAmount(amount: number): MathService {
    this.total = amount;
    return this;
  }

  add(value: number): MathService {
    this.total += value;
    return this;
  }

  subtract(value: number): MathService {
    this.total -= value;
    return this;
  }

  multiply(value: number): MathService {
    this.total *= value;
    return this;
  }

  multiplyAndAdd(amount: number, quantity: number): MathService {
    this.total += amount * quantity;
    return this;
  }

  divide(value: number): MathService {
    if (value === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.total /= value;
    return this;
  }

  percent(percent: number): MathService {
    this.total *= percent / 100;
    return this;
  }

  average(...values: number[]): number {
    if (this.total !== 0) {
      throw new Error('Cannot chain average() with other methods');
    }
    if (values.length === 0) {
      throw new Error('Cannot calculate average of an empty array');
    }
    const sum = values.reduce((total, value) => total + value, 0);
    return sum / values.length;
  }

  applyDiscount(value: number, discountType: AmountType): MathService {
    if (discountType === AmountType.PERCENTAGE) {
      this.total *= 1 - value / 100;
    } else {
      this.total -= value;
    }
    return this;
  }
  applyCharge(value: number, chargeType: AmountType): MathService {
    if (chargeType === AmountType.PERCENTAGE) {
      this.total *= 1 + value / 100;
    } else {
      this.total += value;
    }
    return this;
  }

  getTotal(): number {
    return parseFloat(this.total.toFixed(2));
  }

  createInstance(): MathService {
    return new MathService();
  }

  reset(): MathService {
    this.total = 0;
    return this;
  }
}
