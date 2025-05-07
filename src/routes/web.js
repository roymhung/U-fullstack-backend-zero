const express = require('express');
const { getHomepage, getABC, getRoyhung} = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route',handler)

router.get('/', getHomepage);
  
router.get('/abc', getABC);
  
router.get('/royhung', getRoyhung);

module.exports = router; // export default