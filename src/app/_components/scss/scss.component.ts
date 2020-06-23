import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrls: ['./scss.component.scss']
})
export class ScssComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient)  {  }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data =>  this.data = data);
  }

}
