// Import Functions From Linked javascript Files //

import {book, price} from "../components/bookStore.js";

// Return Cart Function //
const bookDetails = () => {
    let newprice =`<img src="${book.image}" width="75px" height="125px">`;
        newprice += `<br><h7>Price: ${price()}</h7>`;
    return newprice;
 }
 
 // Export Function To Linked javascript Files //
 export {bookDetails};