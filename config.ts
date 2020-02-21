import { Service } from 'typedi'

@Service()
export class Config {
    constructor(
        readonly host: string,
        readonly port: number
    ) { }
}

export const getConfig = () => {
    if (process.env.NODE_ENV === 'development') {
        return new Config(
            'localhost',
            4100
        )
    }
    else if (process.env.NODE_ENV === 'production') {
        return new Config(
            'localhost',
            4100
        )
    }
    else {
        throw new Error('Invalid environment type.')
    }
}