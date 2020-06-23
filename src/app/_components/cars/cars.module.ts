import { NgModule } from '@angular/core';
import { CarsComponent } from './cars.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

const routes = [
    {
        path: '', component: CarsComponent, children: []
    }
];

@NgModule({
    declarations: [CarsComponent],
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule],

    exports: [RouterModule]
})

export class CarsModule {}
