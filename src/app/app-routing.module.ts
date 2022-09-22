import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { FansComponent } from "./fans/fans.component";
import { NewFanComponent } from "./newFan/newFan.component";

export const routes: Routes = [
  { path: '', redirectTo: 'Fans List', pathMatch: 'full' },
  { path: 'Fans List', component: FansComponent },
  { path: 'New Fans', component: NewFanComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
