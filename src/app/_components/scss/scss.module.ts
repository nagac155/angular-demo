import { NgModule } from '@angular/core';
import { ScssComponent } from './scss.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


const routes = [
    {
        path: '', component: ScssComponent, children: []
    }
];

@NgModule({
    declarations: [ScssComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule],
    exports: [RouterModule]
})

export class ScssModule {}
