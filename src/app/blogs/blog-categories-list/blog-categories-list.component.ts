import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubscribeBlogComponent } from "../subscribe-blog/subscribe-blog.component";
import { BlogCategoriesComponent } from "../blog-categories/blog-categories.component";
import { LatestBlogsComponent } from "../latest-blogs/latest-blogs.component";
import { SearchBlogComponent } from "../search-blog/search-blog.component";
import { Subscription } from 'rxjs';
import { BlogsService } from '../../services/blogs.service';
import { BlogItem } from '../../services/blogs.interface';
import { PaginationService } from '../../services/pagination.service';
import { PaginationComponent } from "../../pagination/pagination.component";

@Component({
  selector: 'app-blog-categories-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SubscribeBlogComponent,
    BlogCategoriesComponent,
    LatestBlogsComponent,
    SearchBlogComponent,
    PaginationComponent
],
  templateUrl: './blog-categories-list.component.html',
  styleUrl: './blog-categories-list.component.css'
})
export class BlogCategoriesListComponent implements OnInit {

  private routeSub: Subscription | undefined;
  category!: string;
  blogs!: BlogItem[];
  pages: any = [];
  pageSize: number = 3;
  pagination: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blogsService: BlogsService,
    private paginationService: PaginationService) {
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.category = params['category'].toUpperCase();
      console.log(`Found category: ${this.category}`)
      this.blogs = this.blogsService.getBlogsByCategory(this.category);
    });
    this.setPage(1);
  }

  setPage(pageNumber: number) {
    this.pagination = this.paginationService.getPage(this.blogs.length, pageNumber, this.pageSize);
    this.pages = this.blogs.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }

}
