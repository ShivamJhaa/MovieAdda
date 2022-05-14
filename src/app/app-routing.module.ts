import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovePageComponent } from './move-page/move-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'movie', component: MovePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
