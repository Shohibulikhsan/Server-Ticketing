const express = require('express');
const router = express();
const {
  createCMSOrganizer,
//   createCMSUser,
//   getCMSUsers,
} = require('./controller');


router.post('/organizers',createCMSOrganizer);





module.exports = router;