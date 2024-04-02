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
        cost = this._items.reduce((sum: number, item: Buyable) => {
            return sum + item.price;
        }, 0);
        return cost;
    }

    costWithDiscount(discount: number): number {
        let cost: number = this.costWithoutDiscount();
        return cost - cost*discount/100;
    }

    rem(id: number): void {
        this._items = this._items.filter((item: Buyable) => {
            if (item.id == id) {
                return false;
            }
            return true;  
        });
    }
}