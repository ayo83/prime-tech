import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridOneComponent } from './components/grid-one/grid-one.component';
import { GridTwoComponent } from './components/grid-two/grid-two.component';
import { GridThreeComponent } from './components/grid-three/grid-three.component';
import { GridFourComponent } from './components/grid-four/grid-four.component';


const routes: Routes = [
  {path: '', component: GridOneComponent},
  {path: 'grid-two', component: GridTwoComponent},
  {path: 'grid-three', component: GridThreeComponent},
  {path: 'grid-four', component: GridFourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
