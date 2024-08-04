import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class PaginationService {

    getPage(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // Calculate the total number of pages
        const totalPages = Math.ceil(totalItems / pageSize);

        // Ensure the current page is within the valid range
        const page = Math.max(1, Math.min(currentPage, totalPages));

        // Calculate the start and end index of the current page
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // Calculate the range of pages to display
        const startPage = Math.max(1, page - 2);
        const endPage = Math.min(totalPages, page + 2);

        // Generate the array of page numbers to display
        const pages: number[] = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return {
            totalItems: totalItems,
            currentPage: page,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}