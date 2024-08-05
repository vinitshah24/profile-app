import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';
import { Subscription } from 'rxjs';
import { CommentsComponent } from './comments/comments.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { SidebarBlogsComponent } from '../sidebar-blogs/sidebar-blogs.component';
import { SidebarSubscribeComponent } from '../sidebar-subscribe/sidebar-subscribe.component';
import { SidebarCategoryComponent } from '../sidebar-category/sidebar-category.component';
import { SidebarSearchComponent } from '../sidebar-search/sidebar-search.component';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarSubscribeComponent,
    SidebarCategoryComponent,
    SidebarBlogsComponent,
    SidebarSearchComponent,
    CommonModule,
    CommentsComponent,
    CreateCommentComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

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
      this.blog = this.getPostById(blogId);
    });
  }
}
