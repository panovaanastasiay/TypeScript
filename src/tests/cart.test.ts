import Book from "../book";
import Cart from "../cart";

test('cart check', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  
    const book_1 = new Book(1, 'War and Piece', 'Leo Tolstoy', 1000, 1225);
    const book_2 = new Book(2, 'War', 'Tolstoy', 1000, 1200);
    
    cart.add(book_1);
    cart.add(book_2);
    
    expect(cart.costWithoutDiscount()).toBe(2000);
    expect(cart.costWithDiscount(10)).toBe(1800);
  
    cart.rem(1);
    expect(cart.items.length).toBe(1);
  
  });