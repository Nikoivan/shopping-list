import Buyable from "./buyable";

export default class Smartphone implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly brand: string,
    readonly memory: number,
    readonly displaySize: number
  ) {}
}
