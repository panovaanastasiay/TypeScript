"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_3 = require("../book");
var cart_1 = require("../cart");
test('cart check', function () {
    var cart = new cart_1.default();
    expect(cart.items.length).toBe(0);
    var book_1 = new book_3.default(1, 'War and Piece', 'Leo Tolstoy', 1000, 1225);
    var book_2 = new book_3.default(2, 'War', 'Tolstoy', 1000, 1200);
    cart.add(book_1);
    cart.add(book_2);
    expect(cart.costWithoutDiscount()).toBe(2000);
    expect(cart.costWithDiscount(10)).toBe(1800);
    cart.rem(1);
    expect(cart.items.length).toBe(1);
});
//# sourceMappingURL=cart.test.js.map