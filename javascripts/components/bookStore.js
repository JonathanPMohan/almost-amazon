import {printToDom} from "../helpers/util.js";
import {BookDetails} from "../components/bookCart.js";

const addToCartButton = document.getElementById('cartButton');

const book = {
    title: 'A Million Little Fibers',
    author: 'Steven McTowelie',
    image: '../images/book.jpg',
    price: '$99.99'
}

const bookBuilder = ()=>{
    let domString = `<div class='book_container'>`;
        domString +=`<h3>${book.title}</h3>`;
        domString +=`<h5>By: ${book.author}</h5>`;
        domString += `<img src="${book.image}" width="200px" height="250px" padding="5px">`;
        domString += `<div class='price_container'>`;
        domString +=`<h4>Price: ${book.price}</h4>`;
        domString +=`</div>`;
        domString +=`</div>`;
    
    printToDom(domString, 'bookInfo');
}

const addToCartButtonEvent = () => {
    addToCartButton.addEventListener('click', (e)=>{
        printToDom(BookDetails(), 'cart_container');
    })
}

bookBuilder();

export {book,bookBuilder,addToCartButtonEvent};