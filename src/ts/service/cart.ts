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
    return this._items.reduce(
      (acc: number, el: { item: Buyable; quantity: number }) =>
        acc + el.item.price,
      0
    );
  }

  discountTotalAmount(discount: number): number {
    return this.amount * ((100 - discount) / 100);
  }

  deleteItem(id: number): void {
    this._items = this._items.filter((el) => el.item.id !== id);
  }

  getItemById(id: number): { item: Buyable; quantity: number } {
    return this._items.find((el) => el.item.id === id);
  }

  get items(): { item: Buyable; quantity: number }[] {
    return [...this._items];
  }
}
