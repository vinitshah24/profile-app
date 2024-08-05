import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { BlogsService } from '../../services/blogs.service';
import { BlogItem } from '../../services/blogs.interface';
import { PaginationService } from '../../services/pagination.service';
import { PaginationComponent } from "../../pagination/pagination.component";
import { SidebarSubscribeComponent } from '../sidebar-subscribe/sidebar-subscribe.component';
import { SidebarCategoryComponent } from '../sidebar-category/sidebar-category.component';
import { SidebarBlogsComponent } from '../sidebar-blogs/sidebar-blogs.component';
import { SidebarSearchComponent } from '../sidebar-search/sidebar-search.component';


@Component({
  selector: 'app-blog-categories-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SidebarSubscribeComponent,
    SidebarCategoryComponent,
    SidebarBlogsComponent,
    SidebarSearchComponent,
    PaginationComponent
  ],
  templateUrl: './blog-search.component.html',
  styleUrl: './blog-search.component.css'
})
export class BlogSearchComponent implements OnInit {

  private routeSub: Subscription | undefined;

  searchCategory!: string;
  searchBlogTitle!: string;

  blogs!: BlogItem[];
  pages: any = [];
  pageSize: number = 4;
  pagination: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blogsService: BlogsService,
    private paginationService: PaginationService) {
  }


  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.searchCategory = params['category'];
      this.searchBlogTitle = params['blog'];
      if (this.searchCategory) {
        this.blogs = this.blogsService.getBlogsByCategory(this.searchCategory);
        if (this.blogs.length == 0) {
          this.router.navigate(['error'])
        }
        this.setPage(1);
      } else if (this.searchBlogTitle) {
        this.blogs = this.blogsService.getBlogsByTitle(this.searchBlogTitle);
        if (this.blogs.length == 0) {
          this.router.navigate(['error'])
        }
        this.setPage(1);
      } else {
        this.router.navigate(['error'])
      }
    });
  }

  setPage(pageNumber: number) {
    this.pagination = this.paginationService.getPage(this.blogs.length, pageNumber, this.pageSize);
    this.pages = this.blogs.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }

}
