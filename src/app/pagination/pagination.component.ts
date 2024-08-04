import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() pager: {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: [];
  } | undefined;
  @Output() setCurrPage: EventEmitter<any> = new EventEmitter<any>();


  constructor(){
    this.pager = undefined;
  }

  setCurrentPage(pageNumber: number){
    this.setCurrPage.emit(pageNumber);
  }
}
