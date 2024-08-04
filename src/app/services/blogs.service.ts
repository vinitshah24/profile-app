import { Injectable } from '@angular/core';
import { blogs } from './blogs.data';
import { BlogData } from './blogs.interface';

@Injectable({
    providedIn: 'root'
})
export class BlogsService {
    blogsData: BlogData = blogs

    getBlogs() {
        return this.blogsData.items;
    }

    getBlogTitle() {
        return this.blogsData.title;
    }

    getBlogDescription() {
        return this.blogsData.description;
    }

    getBlogById(id: number) {
        console.log(`Blog ID: ${id}`);
        console.log(this.blogsData.items.filter(x => x.id == id).at(0));
        return this.blogsData.items.filter(x => x.id == id).at(0);
    }

    getTopNBlogsByDate(count: number) {
        // Ensure count is a positive integer and does not exceed the number of available items
        const limit = Math.max(0, Math.min(count, this.blogsData.items.length));
        // Sort the items by publish_date in descending order
        const sortedItems = this.blogsData.items.slice().sort(
            (a, b) => b.publish_date.getTime() - a.publish_date.getTime()
        );
        // Return the top N items
        return sortedItems.slice(0, limit);
    };

    getBlogCategories() {
        // Extract all categories from blog items
        const allCategories = this.blogsData.items.flatMap(blog => blog.categories);
        // Remove duplicates by creating a Set
        return Array.from(new Set(allCategories));
    }

    getBlogCategoryCount() {
        const categoryCounts: Record<string, number> = {};
        this.blogsData.items.forEach(blog => {
            // Iterate over each category in the blog
            blog.categories.forEach(category => {
                // If the category is already in the map, increment its count
                if (categoryCounts[category]) {
                    categoryCounts[category]++;
                } else {
                    // Otherwise, initialize the count to 1
                    categoryCounts[category] = 1;
                }
            });
        });
        return categoryCounts;
    }

    getBlogsByCategory(category: string) {
        return this.blogsData.items.filter(blog =>
            blog.categories.includes(category.toLowerCase())
        );
    }
}