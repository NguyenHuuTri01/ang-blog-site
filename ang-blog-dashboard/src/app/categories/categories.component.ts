import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // [(ngModel)] = "category"
  // category: string = '';

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      console.log(val)
    })
  }
  onSubmit(formData: any) {
    // this.category = '';
    let categoryData: Category = {
      category: formData.value.category
    }
    this.categoryService.saveData(categoryData)

    // let subCategoryData = {
    //   category: 'subCategory1',
    // }
    // this.afs.collection('categories').add(categoryData).then(docRef => {

    //   // this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData)

    //   this.afs.collection('categories').doc(docRef.id).collection('subcategories')
    //     .add(subCategoryData).then(docRef1 => {
    //       // this.afs.doc(`categories/${docRef.id}/subcategories/${docRef1.id}`)
    //       //   .collection('subsubcategories').add(subCategoryData)
    //       this.afs.collection('categories').doc(docRef.id).collection('subcategories')
    //         .doc(docRef1.id).collection('subsubcategories').add(subCategoryData).then(
    //           docRef2 => {
    //             console.log('Second Level Subcategory Saved Successfully')
    //           }
    //         )
    //     })
    // }).catch(err => { console.log(err) })
  }
}
