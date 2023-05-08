import { Service } from 'typedi';
import { logger } from '@utils/logger';
import { PostsSet } from '@interfaces/posts.interface';
import axios from 'axios';
import { PostModel } from '@models/posts.model';

@Service()
export class PostsService {
  public async UpdatePostsFromAPI() {
    logger.info('===================Se esta llenando!!!=====================');
    const res = await axios.get<Array<PostsSet>>('https://jsonplaceholder.typicode.com/posts/');
    const { data, status } = res;
    if (status === 200) {
      for (const postAPI of data) {
        const q = { id: postAPI.id };
        const post = await PostModel.findOne(q).select('id');
        if (!post) {
          await PostModel.create({ ...postAPI, loaded: false });
        } else {
          await PostModel.updateOne({ _id: post._id }, { $set: postAPI });
        }
      }
      logger.info('===================Terminamos!!!=====================');
    } else {
      logger.error('===================Error al LLenar!!!=====================');
    }
  }
}
