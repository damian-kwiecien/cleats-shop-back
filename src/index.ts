require('reflect-metadata')
import { Container } from 'typedi'
import { getConfig, Config } from '../config'
import { createConnection, Connection, useContainer } from 'typeorm'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import setUserRouting from './users/user.routing'

const init = async () => {
    Container.set(Config, getConfig())
    useContainer(Container)
    Container.set(Connection, await createConnection())

    const app = express()
    app.use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(cors())
        .use(setUserRouting())
        .listen(getConfig().port)
}
init()