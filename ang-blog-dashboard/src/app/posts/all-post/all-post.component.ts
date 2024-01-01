import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  postArray: any[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.loadData().subscribe(val => {
      this.postArray = val;
    })
  }

  onDelete(postImgPath: any, id: string) {
    if (confirm('Are you sure to delete?') == true) {
      this.postService.deleteImage(postImgPath, id);
    } else {
      console.log('Cancel Delete')
    }
  }

  onFeatured(id: string, value: boolean) {
    const featuredData = {
      isFeatured: value
    }
    this.postService.markFeatured(id, featuredData);
  }

}
