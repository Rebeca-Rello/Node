const {Router} =require("express")
const router = Router();
const booksCtrl = require("../controller/book.controller")

// router.get("/", booksCtrl.getStart);

router.get("/book", booksCtrl.getBooks);

router.post("/book", booksCtrl.postBooks);

router.put("/book", booksCtrl.putBooks);

router.delete("/book", booksCtrl.deleteBooks);



module.exports=router;

