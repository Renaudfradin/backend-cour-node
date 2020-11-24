const express = require('express');
const router = express.Router();
const Thing = require('../models/Thing.js');
const stuffCtrl =require('../controllers/stuff.js');



router.post('/',stuffCtrl.createThing);

router.delete('/:id',stuffCtrl.deleteThing);

router.put('/:id',stuffCtrl.updateOneThing);

router.get('/:id',stuffCtrl.findOneThing);

router.get('/',stuffCtrl.findThing)

module.exports = router;