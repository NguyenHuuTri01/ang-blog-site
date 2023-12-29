import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private storage: AngularFireStorage) { }

  uploadImage(selectedImage: any) {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const filePath = `postIMG/${Date.now()}`
    this.storage.upload(filePath, selectedImage, metadata).then(() => {
      console.log('post image uploaded successfully');
    })
  }

}
