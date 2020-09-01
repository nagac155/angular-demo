export interface ICars {
    make: string;
    model: string;
    year: string;
    sales?: number;
  }



export const carsList: Array<ICars> = [
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
    {make: 'Toyota', model: 'RAV4', year: '2018' },
] ;
