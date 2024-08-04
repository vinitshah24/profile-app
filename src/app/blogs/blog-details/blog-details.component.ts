import { Component } from '@angular/core';
import { SubscribeBlogComponent } from "../subscribe-blog/subscribe-blog.component";
import { BlogCategoriesComponent } from "../blog-categories/blog-categories.component";
import { LatestBlogsComponent } from "../latest-blogs/latest-blogs.component";
import { SearchBlogComponent } from "../search-blog/search-blog.component";
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    RouterOutlet,
    SubscribeBlogComponent,
    BlogCategoriesComponent,
    LatestBlogsComponent,
    SearchBlogComponent,
    BlogComponent
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

}
