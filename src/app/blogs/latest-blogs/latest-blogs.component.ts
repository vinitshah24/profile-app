import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-latest-blogs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './latest-blogs.component.html',
  styleUrl: './latest-blogs.component.css'
})
export class LatestBlogsComponent {

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