import { Request, Response } from 'express'
import User from '../models/user'

class UsersController {

    public async add (req: Request, res: Response): Promise<void> {
        const newUser = new User(req.body)
        await newUser.save()
        res.json({data: newUser})
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { username } = req.params
        await User.findOneAndDelete({username})
        res.json({respuesta: 'Usuario eliminado satisfactoriamente'})
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { username } = req.params
        const user = await User.findOneAndUpdate({username}, req.body, {new: true})
        res.json(user)
    }

    public async showAll (req: Request, res: Response): Promise<void> {
        const users = await User.find().populate('posts', 'title createdAt')
        res.json(users)
    }

    public async showOne (req: Request, res: Response): Promise<void> {
        const user = await User.findOne({username: req.params.username}).populate('posts');
        res.json(user)
    }

}

export const usersController = new UsersController()