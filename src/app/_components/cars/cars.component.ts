import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;

  data;
coulmn;
value;

  constructor() { }

  ngOnInit(): void {

    this.data = this.cars_list();
    this.value = 'accord';

    this.coulmn = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Year', field: 'year'}
  ];
  }
  cars_list()  {
    const list = [
        {make: 'Honda', model: 'Accord', year: '2019' },
        {make: 'Honda', model: 'Civic', year: '2019' },
        {make: 'Honda', model: 'Clarity', year: '2019' },
        {make: 'Honda', model: 'CR-V', year: '2019' },
        {make: 'Honda', model: 'Pilot', year: '2019' },
        {make: 'Honda', model: 'Fit', year: '2019' },
        {make: 'Toyota', model: 'Prius', year: '2019' },
        {make: 'Toyota', model: 'Camry', year: '2019' },
        {make: 'Toyota', model: 'Corolla', year: '2019' },
        {make: 'Toyota', model: 'Avalon', year: '2019' },
        {make: 'Toyota', model: 'C-HR', year: '2019' },
        {make: 'Toyota', model: 'RAV4', year: '2019' },



    ] ;

    return list;
}

searchText(e) {
e.preventDefault();
const items: any = this.searchInput.nativeElement.value.toLowerCase().trim().split(/[\s,]+/);
this.data = this.cars_list().filter(car => {
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

