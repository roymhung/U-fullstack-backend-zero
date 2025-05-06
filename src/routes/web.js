const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});
  
router.get('/abc', (req, res) => {
    res.send('Hello World! roy hung');
});
  
router.get('/royhung', (req, res) => {
    res.render('sample.ejs');
});

module.exports = router; // export default