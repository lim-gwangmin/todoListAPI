const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
   res.render('index', {title: 'Express'});
});

router.get('/api/page', (req, res) => {
   res.status(200).json({
      'message': '성공!'
   });
});

module.exports = router;