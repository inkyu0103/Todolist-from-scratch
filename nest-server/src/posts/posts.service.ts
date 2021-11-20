import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './posts.model';

@Injectable()
export class PostsService {
  private posts: Posts[] = [];

  getAllPosts() {
    return this.posts;
  }

  createPost(createPostDto: CreatePostDto) {
    const { title, content } = createPostDto;
    const post: Posts = {
      id: 1,
      title,
      content,
      isCheck: false,
      isSaved: false,
    };

    this.posts.push(post);
    return post;
  }
}
