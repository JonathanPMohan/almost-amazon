import {book} from "../components/store.js";

const getBookDetails = () => {
    // let newprice= `<h3>${book.title}</h3>`;
    let newprice =`<br><img src="${book.image}" width="50px" height="50px">`;
        newprice += `<br><h6>Price: ${book.price}</h6>`;
    return newprice;
 }
 
 export {getBookDetails};