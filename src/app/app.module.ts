import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorouselComponent } from './corousel/corousel.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CorouselComponent,
    CardComponent,
    FooterComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  entryComponents: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    DetailCardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
