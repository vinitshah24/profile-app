import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from "./comments/comments.component";
import { CreateCommentComponent } from "./create-comment/create-comment.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    CommentsComponent,
    CreateCommentComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit, OnDestroy {

  blog: {
    id: number,
    title: string,
    description: string,
    publish_date: Date,
    thumbnail: string,
    image: string,
    categories: string[]
  } | undefined;

  private routeSub: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private blogsService: BlogsService) {

  }

  ngOnInit() {
    console.log("Blog init!")
    this.getBlogResource()
  }

  ngOnDestroy() {
    if (this.routeSub !== undefined) {
      this.routeSub.unsubscribe();
    }
  }

  getPostById(id: number) {
    const blog = this.blogsService.getBlogById(id);
    if (blog === undefined) {
      this.router.navigate(['error'])
    }
    return blog
  }

  getBlogResource() {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      const blogId = +params['id'];
      console.log(`Subscribed ID ${blogId}`)
      this.blog = this.getPostById(blogId);
    });
  }
}
