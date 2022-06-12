const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');

const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/posts', postController.index);
router.get('/posts/create', postController.create);
router.get('/posts/delete/:id', postController.delete);
router.post('/posts/store', postController.store);
router.get('/posts/edit/:id', postController.change);

module.exports = router;