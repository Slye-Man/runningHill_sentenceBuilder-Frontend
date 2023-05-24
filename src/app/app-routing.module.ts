import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DisplayViewComponent } from './pages/display-view/display-view.component';

const routes: Routes = [
  {path: '', redirectTo:'sentence-builder', pathMatch: "full"},
  {path: 'sentence-builder', component: DisplayViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
