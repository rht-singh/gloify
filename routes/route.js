const RouterGuard = require('../middleware/RouterGuard');
const router = require('express').Router();
const allStores = require('../controller/allStores');
const register = require('../controller/LoginAndRegister/Register');
const registerStore = require('../controller/LoginAndRegister/registerStore');
const login = require('../controller/LoginAndRegister/login');
const addBook = require('../controller/addBook');
const allBooks = require('../controller/allBooks');
const updateBook = require('../controller/updateInventory');
const removeBook = require('../controller/remove');

router.route('/allStores').get(allStores.allstores);
router.route('/register').post(register.register);
router.route('/books').get(allBooks.allBooks);
router.route('/booksInInventory').get(allBooks.booksInInventory);
router.route('/update').patch(updateBook.updateInventory);
router.route('/:id/delete').delete(removeBook.deleteBook);
router.route('/registerStore').post(RouterGuard, registerStore.registerStore);
router.route('/login').get(login.login);
router.route('/addBook').post(addBook.book);


module.exports = router