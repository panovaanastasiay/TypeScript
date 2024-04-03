import Buyable from "./buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    costWithoutDiscount(): number {
      let cost: number;
      cost = this._items.reduce(function(sum, currentAmount){
        return sum + currentAmount.price
      }, 0);
      return cost;
    }

    costWithDiscount(discount: number): number {
        let cost: number = this.costWithoutDiscount();
        return cost - cost*discount/100;
    }

    rem(id: number): void {
      const indexToRemove = this._items.findIndex((item: Buyable) => item.id === id);
      if(indexToRemove !== -1) {
        this._items.splice(indexToRemove, 1)
      }
    }
}