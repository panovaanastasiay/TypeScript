"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.costWithoutDiscount = function () {
        var cost;
        cost = this._items.reduce(function (sum, currentAmount) {
            return sum + currentAmount.price;
        }, 0);
        return cost;
    };
    Cart.prototype.costWithDiscount = function (discount) {
        var cost = this.costWithoutDiscount();
        return cost - cost * discount / 100;
    };
    Cart.prototype.rem = function (id) {
        var indexToRemove = this._items.findIndex(function (item) { return item.id === id; });
        if (indexToRemove !== -1) {
            this._items.splice(indexToRemove, 1);
        }
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=cart.js.map