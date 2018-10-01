import {printToDom} from "../helpers/util.js";
import {getBookDetails} from "../components/bookCart.js";

const addToCartButton = document.getElementById('cartButton');

const book = {
    title:'A Million Tiny Fibers: By Steven McTowelie',
    image:'./images/book.jpeg',
    price:'$99.99'
}

const bookBuilder = ()=>{
    let domString = `<div class='book_container'>`;
        domString +=`<h3>${book.title}</h3>`;
        domString += `<img src="${book.image}" width="200px" height="250px">`;
        domString +=`<h4>Price: ${book.price}</h4>`;
        domString +=`</div>`;
    printToDom(domString, 'bookInfo');
}

const addToCartButtonEvent = () => {
    addToCartButton.addEventListener('click', (e)=>{
        printToDom(getBookDetails(), 'cart_container');
    })
}

export {book,bookBuilder,addToCartButtonEvent};