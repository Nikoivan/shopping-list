import Buyable from "../domain/buyable";

export default class Cart {
  _items: { item: Buyable; quantity: number }[] = [];

  add(item: Buyable, quantity: number): void {
    if (
      item.constructor.name === "Smartphone" ||
      item.constructor.name === "Notebook"
    ) {
      quantity = quantity;
    } else {
      quantity = 1;
    }
    //тут мог бы написать, условную конструкцию на проверку наличия данного товара уже в корзине, но кажется в рамках задачи - это лишнее
    this._items.push({ item, quantity });
  }

  get amount(): number {
    const result = this._items.reduce((acc, el) => acc + el.item.price, 0);
    return result;
  }

  discountTotalAmount(discount: number): number {
    const result = this.amount * ((100 - discount) / 100);
    /*if (result < 0) {
      return Math.abs(result);
    }    Посчитал, что возможно будет правильно приведение возможного значения к положительному*/
    return result;
  }

  deleteItem(id: number): void {
    const found = this._items.findIndex((el) => el.item.id === id);
    if (found !== -1) {
      this._items.splice(found, 1);
    }
  }

  getItemById(id: number): { item: Buyable; quantity: number } {
    const found = this._items.findIndex((el) => el.item.id === id);
    if (found !== -1) {
      return this._items[found];
    }
    return null;
  }

  get items(): { item: Buyable; quantity: number }[] {
    return [...this._items];
  }
}
