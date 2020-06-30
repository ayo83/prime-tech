import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxGridModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridOneComponent } from './components/grid-one/grid-one.component';
import { GridTwoComponent } from './components/grid-two/grid-two.component';
import { GridThreeComponent } from './components/grid-three/grid-three.component';
import { GridFourComponent } from './components/grid-four/grid-four.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridOneComponent,
    GridTwoComponent,
    GridThreeComponent,
    GridFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
