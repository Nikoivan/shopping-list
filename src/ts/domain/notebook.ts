import Buyable from "./buyable";

export default class Notebook implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly brand: string,
    readonly memory: number,
    readonly displaySize: number,
    readonly hardDriveSize: number,
    readonly processorType: string
  ) {}
}
