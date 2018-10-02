// Import Functions From Linked javascript Files //

import {bookPrint, addToCartButtonEvent} from './components/bookStore.js'

// Initialize App Function //
const initializeApp = () => {
    bookPrint();
    addToCartButtonEvent();
}

initializeApp();