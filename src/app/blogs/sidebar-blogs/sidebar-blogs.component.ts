import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-sidebar-blogs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './sidebar-blogs.component.html',
  styleUrl: './sidebar-blogs.component.css'
})
export class SidebarBlogsComponent {

  blogs?: {
    id: number,
    title: string,
    description: string,
    publish_date: Date,
    thumbnail: string,
    image: string,
    categories: string[]
  }[];

  constructor(private blogsService: BlogsService) {

  }

  ngOnInit() {
    this.blogs = this.getLatestBlogs();
  }

  getLatestBlogs() {
    return this.blogsService.getTopNBlogsByDate(3);
  }

}