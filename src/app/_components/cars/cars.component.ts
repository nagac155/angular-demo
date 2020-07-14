import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICars, carsList } from 'src/app/_mock-data/cars-data';
import { CarsService } from 'src/app/_services/cars.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  data: Array<ICars>;
  coulmn;
  value: string;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(cars => this.data = cars);
    this.value = 'accord';
  }
 

  searchText(e) {
    e.preventDefault();
    const items: any = this.searchInput.nativeElement.value.toLowerCase().trim().split(/[\s,]+/);
    this.data = carsList.filter(car => {
      const matchingCarsList = [] ;
      const carDetails = [];

      if (!!car.make) {
        carDetails.push(...car.make.toLocaleLowerCase().split(/[\s,]+/));
      }

      if (!!car.model) {
        carDetails.push(...car.model.toLocaleLowerCase().split(/[\s,]+/));
      }

      if (!!car.year) {
        carDetails.push(...car.year.toLocaleLowerCase().split(/[\s,]+/));
      }

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < items.length; i++) {
        const itemsMatchingList: any = carDetails.filter(e => e.startsWith(items[i]));
        if (itemsMatchingList.length > 0) {
            const diffElements: any = itemsMatchingList.filter(e => !matchingCarsList.includes(e));
            matchingCarsList.push(...diffElements);
        } else {return false; }
      }
      return matchingCarsList.length >= items.length;
    });
  }

  onKeyPress(e) {

  }

  onPaste(e) {

  }

}
