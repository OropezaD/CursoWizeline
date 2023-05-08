import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { PostsController } from '@controllers/posts.controller';

export class PostsRoute implements Routes {
  public path = '/posts';
  public router = Router();
  public posts = new PostsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.posts.getPosts);
    // this.router.get(`${this.path}/:id`, AuthMiddleware, this.posts.getUserById);
    // this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateUserDto, 'body'), this.posts.createUser);
    // this.router.put(`${this.path}/:id`, AuthMiddleware, ValidationMiddleware(CreateUserDto, 'body', true), this.posts.updateUser);
    // this.router.delete(`${this.path}/:id`, AuthMiddleware, this.posts.deleteUser);
  }
}
