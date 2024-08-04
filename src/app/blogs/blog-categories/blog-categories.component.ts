import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-categories',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './blog-categories.component.html',
  styleUrl: './blog-categories.component.css'
})
export class BlogCategoriesComponent {

  categories: { [key: string]: number }

  constructor(private blogsService: BlogsService) {
    this.categories = this.getCategoryCount();
  }

  getCategoryCount() {
    return this.blogsService.getBlogCategoryCount();
  }
}
