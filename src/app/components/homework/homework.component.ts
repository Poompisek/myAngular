import { Component, OnInit } from '@angular/core';
import { GetpostsService } from '../../services/getposts.service';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  private postList: Posts[];  
  
    constructor( private getpostsservice: GetpostsService) { }

  ngOnInit() {
    this.getpostsservice.getPostList().subscribe((response) => {
      this.postList = response;
      // this.postList.splice(4, 4995);
    })
  }

}
