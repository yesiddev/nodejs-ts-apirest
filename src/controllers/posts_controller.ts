import { Request, Response } from 'express'
import Post from '../models/post'

class PostsController {

    public async add (req: Request, res: Response): Promise<void> {
        const {title, url, content, image} = req.body
        const newPost = new Post({ title, url, content, image })
        await newPost.save()
        res.json({data: newPost})
        console.log('Nueva publicacion guardada')
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { url } = req.params
        await Post.findOneAndDelete({url})
        res.json({response: 'Publicación eliminada satisfactoriamente'})
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { url } = req.params
        
        const post = await Post.findOneAndUpdate({url}, req.body, {new: true})
        res.json(post)
    }

    public async showAll (req: Request, res: Response): Promise<void> {
        const posts = await Post.find()
        res.json(posts)
    }

    public async showOne (req: Request, res: Response): Promise<void> {
        const post = await Post.findOne({url: req.params.url})
        res.json(post)
    }

}

export const postsController = new PostsController()