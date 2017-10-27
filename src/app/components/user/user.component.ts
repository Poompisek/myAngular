import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../services/getphoto.service';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  private my_name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private skills: string[];

  private photoList: Photo[];

  private isEditable: boolean = true;

  constructor(private getphotoService: GetphotoService) { }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    return false; // add for do not want refresh page
  }

  ngOnInit() {

    this.my_name = "Poompisek Natiphuwarak"
    this.age = 21;
    this.email = "poompisek.poom@g.swu.ac.th";
    this.address = {
      street: "123 ปลาฉลามขึ้นบก 456จิ้งจกยัดไส้",
      city: "Saimai",
      province: "Bangkok",
      postcode: "10220"
    }
    this.skills = ["Sleeping", "Eating"];

    this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(4, 4995);
    })
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }

}
