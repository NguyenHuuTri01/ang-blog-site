import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private afs: AngularFirestore) { }

  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category,
      status: 'active'
    }
    this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef)
    }).catch(err => { console.log(err) })
  }
}
