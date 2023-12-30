import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
  ) { }

  uploadImage(selectedImage: any, postData: any) {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const filePath = `postIMG/${Date.now()}`
    this.storage.upload(filePath, selectedImage, metadata).then(() => {
      console.log('post image uploaded successfully');
      this.storage.ref(filePath).getDownloadURL().subscribe(URL => {
        postData.postImgPath = URL;
        this.saveData(postData);
      })
    })
  }
  saveData(postData: any) {
    this.afs.collection('posts').add(postData).then(docRef => {
      this.toastr.success('Data Insert Successfully');
      this.router.navigate(['/posts']);
    })
  }

  loadData() {
    return this.afs.collection('posts', ref => ref.orderBy('createdAt', 'desc')).snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }
}
