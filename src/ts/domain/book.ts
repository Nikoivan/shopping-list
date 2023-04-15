import Buyable from "./buyable";

export default class Book implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly author: string,
    readonly pages: number
  ) {}
}
