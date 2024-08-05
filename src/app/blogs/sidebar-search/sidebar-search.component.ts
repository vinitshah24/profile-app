import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { BlogsService } from '../../services/blogs.service';


@Component({
  selector: 'app-sidebar-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './sidebar-search.component.html',
  styleUrl: './sidebar-search.component.css'
})
export class SidebarSearchComponent {

  searchForm: FormGroup = new FormGroup({
    searchTerm: new FormControl("", [Validators.required]),
  });

  searchTerm?: string;

  constructor(private blogService: BlogsService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  search() {
    this.searchTerm = this.searchForm.value.searchTerm
    console.log(`Found Search Term: ${this.searchTerm}`);
    this.router.navigate(["/blogs", "search"], { queryParams: { blog: this.searchTerm }, });
  }

}
