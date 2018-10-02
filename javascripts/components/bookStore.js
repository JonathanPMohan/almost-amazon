// Import Functions From Linked Javascript Files //

import {printToDom} from "../helpers/util.js";
import {bookDetails} from "../components/bookCart.js";

// Add To Cart Button //

const addToCartButton = document.getElementById('cartButton');

// Book Info //

const book = {
    title: 'A Million Little Fibers',
    author: 'Steven McTowelie',
    image: '../images/book.jpg',
    price: '$9.99'
}

// Book Builder //

const bookPrint = () => {
    let domString = `<div class='bookContainer'>`;
        domString +=`<h3>${book.title}</h3>`;
        domString +=`<h5>By: ${book.author}</h5>`;
        domString += `<img src="${book.image}" width="200px" height="250px" padding="5px">`;
        domString += `<div class='priceContainer'>`;
        domString +=`<h4>Price: ${book.price}</h4>`;
        domString +=`</div>`;
        domString +=`</div>`;
    
    printToDom(domString, 'bookInfo');
}


bookPrint();

// Add To Cart Button Event //

const addToCartButtonEvent = () => {
    addToCartButton.addEventListener('click', (e) => {
        printToDom(bookDetails(), 'cartContainer');
    })
}

// Return Price Function //

const price = () => {
    return book.price;
};

// Export Functions To Linked javascript files //
export {book, bookPrint, addToCartButtonEvent, price};