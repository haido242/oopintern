const router = require('express').Router()
const User = require('./Controller/userController')
const Group = require('./Controller/GroupController')
const user = new User
const group = new Group
//user
router.post('/createUser', user.createUser)

router.get('/getListUser', user.getUserList)

router.get('/getUser/:id', user.getUserByid)

router.delete('/delete/:id', user.deleteUser)

router.put('/updateUser/:id', user.updateUser)

router.get('/search', user.searchUserName)

router.get('/getListUsers', user.getAndPagination)

router.get('/getByDate', user.findByDate)

// router.get('/getManyUser', user.getManyById)

//group
router.post('/group', group.createGroup)

router.get('/group', group.getGoupList)

// router.put('/group/:id', group.updateGroup)

router.delete('/group/:id', group.deleteGroup)


module.exports = router