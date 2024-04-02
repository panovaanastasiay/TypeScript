"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("../cart");
var movie_1 = require("../movie");
test('cart check', function () {
    var cart = new cart_1.default();
    var film = new movie_1.default(1, 2012, 'USA', 'Avengers Assemble', 'фантастика, боевик, фэнтези, прключения', 137);
    cart.add(film);
    expect(film.name).toBe('Avengers Assemble');
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toEqual(film);
});
//# sourceMappingURL=movie.test.js.map