import express from 'express'
import passport from 'passport'
import * as userCtrl from '../../controllers/user'

const router = express.Router()

router.get('/', passport.authenticate('jwt'), userCtrl.getUsers)

router.post('/', userCtrl.addUser)

router.get('/:id', passport.authenticate('jwt'), userCtrl.getUser)

router.get(
  '/username/:username',
  passport.authenticate('jwt'),
  userCtrl.getUserByUsername
)

router.patch('/:id', passport.authenticate('jwt'), userCtrl.updateUser)

router.delete('/:id', passport.authenticate('jwt'), userCtrl.deleteUser)

router.delete(
  '/deletenow/:id',
  passport.authenticate('jwt'),
  userCtrl.deleteUserImmediately
)

router.post(
  '/restore/:id',
  passport.authenticate('jwt'),
  userCtrl.abortDeleteUser
)

export default router
