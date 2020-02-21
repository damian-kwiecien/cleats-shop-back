import { Router } from 'express'
import { Container } from 'typedi'
import { UserService } from './user.service'

export default () => {
    const router = Router()
    const userService = Container.get(UserService)

    router.get('/', async function (req, res) {
        const dto = await userService.save({ firstName: 'i', lastName: 'ii' })
        res.json(dto)
    })

    router.get('/a', async function (req, res) {
        const dto = await userService.get('i')
        res.json(dto)
    })

    return router
}
