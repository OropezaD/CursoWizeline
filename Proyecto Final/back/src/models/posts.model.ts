import { model, Schema, Document } from 'mongoose';
import { PostsSet } from '@interfaces/posts.interface';

const PostsSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

export const PostModel = model<PostsSet & Document>('post_Model', PostsSchema);
