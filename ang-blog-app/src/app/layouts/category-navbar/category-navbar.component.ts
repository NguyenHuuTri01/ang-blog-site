import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: any[] = [];

  constructor(private categoryServices: CategoriesService) { }

  ngOnInit(): void {
    this.categoryServices.loadData().subscribe(val => {
      this.categoryArray = val;
    })
  }

}
