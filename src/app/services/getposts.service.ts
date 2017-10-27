import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetpostsService {

  constructor(private http: Http) { }

  getPostList() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .map((res) => res.json());
  }

}
