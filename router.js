const router = require('express').Router()
const User = require('./Controller/userController')
const Group  = require('./Controller/GroupController')
const test = require('./Controller/test')
const user = new User
//user
// router.post('/createUser', user.createUser)

router.get('/getListUser', user.getUserList)

// router.delete('/delete/:id', user.deleteUser)

// router.put('/updateUser/:id', user.updateUser)

//group
router.post('/group', Group.createGroup)

router.get('/group', Group.getGoupList)

router.put('/group/:id', Group.updateGroup)

router.delete('/group/:id', Group.deleteGroup)

const Test = new test
router.get('/test', Test.get)

module.exports = router