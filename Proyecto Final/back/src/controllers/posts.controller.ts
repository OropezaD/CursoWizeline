import { NextFunction, Request, Response } from 'express';
import { PostModel } from '@models/posts.model';
import { PostsService } from '@services/posts.service';
import { Container } from 'typedi';

export class PostsController {
  public user = Container.get(PostsService);

  public getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query.query;
      console.log('esta es la query', query);
      const posts = await PostModel.find({ title: { $regex: new RegExp(`${query}`, 'i') } }).limit(20);

      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
