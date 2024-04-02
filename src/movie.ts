import Buyable from "./buyable";

export default class Movie implements Buyable{
  constructor(
    readonly id: number,
    readonly year: number,
    readonly country: string, 
    readonly name: string,
    readonly type: string,
    readonly duration: number,
  ) {}
}