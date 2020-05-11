import { Request, Response } from 'express'

export class IndexController {

    public index( req: Request, res: Response ) {
        res.send('Api Rest con Typescript y NodeJS')
    }

}

export const indexController = new IndexController()