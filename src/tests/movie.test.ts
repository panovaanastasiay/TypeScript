import Cart from "../cart";
import Movie from "../movie";

test('cart check', () => {
    const cart = new Cart();
    const film = new Movie(1, 2012, 'USA', 'Avengers Assemble', 'фантастика, боевик, фэнтези, прключения', 137);
  
    cart.add(film);
  
    expect(film.name).toBe('Avengers Assemble');
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toEqual(film);
  });