import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsService } from '../services/blogs.service';
import { PaginationService } from '../services/pagination.service'
import { RouterOutlet, RouterLink } from '@angular/router';
import { PaginationComponent } from "../pagination/pagination.component";
import { BlogItem } from '../services/blogs.interface';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    PaginationComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {


  blog_title: string = ""
  blog_description: string = ""
  blogs: BlogItem[];
  pages: any = [];
  pageSize: number = 3;
  pagination: any = {};


  constructor(private blogsConfig: BlogsService, private paginationService: PaginationService) {
    this.blogs = blogsConfig.getBlogs();
    this.blog_title = blogsConfig.getBlogTitle();
    this.blog_description = blogsConfig.getBlogDescription();
    this.setPage(1);
  }

  setPage(pageNumber: number) {
    this.pagination = this.paginationService.getPage(this.blogs.length, pageNumber, this.pageSize);
    this.pages = this.blogs.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }

}
