import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-sidebar-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './sidebar-category.component.html',
  styleUrl: './sidebar-category.component.css'
})
export class SidebarCategoryComponent {

  categories: { [key: string]: number }

  constructor(private blogsService: BlogsService) {
    this.categories = this.getCategoryCount();
  }

  getCategoryCount() {
    return this.blogsService.getBlogCategoryCount();
  }
}
