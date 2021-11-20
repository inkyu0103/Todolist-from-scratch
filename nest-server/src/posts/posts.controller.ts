import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './posts.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get('/')
  getAllPosts(): Posts[] {
    return this.postService.getAllPosts();
  }

  @Post('/')
  createPost(@Body() createPostDto: CreatePostDto): Posts {
    return this.postService.createPost(createPostDto);
  }
}
