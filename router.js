const router = require('express').Router()
const User = require('./Controller/userController')
const Group  = require('./Controller/GroupController')

//user
router.post('/createUser', User.createUser)

router.get('/getListUser', User.getUserList)

router.delete('/delete/:id', User.deleteUser)

router.put('/updateUser/:id', User.updateUser)

//group
router.post('/group', Group.createGroup)

router.get('/group', Group.getGoupList)

router.put('/group/:id', Group.updateGroup)

router.delete('/group/:id', Group.deleteGroup)


module.exports = router