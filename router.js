const router = require('express').Router()
const User = require('./Controller/userController')


router.post('/createUser', User.createUser)

router.get('/getListUser', User.getUserList)

router.delete('/delete/:id', User.deleteUser)

router.put('/updateUser/:id', User.updateUser)

router.post('/', User.test)


module.exports = router