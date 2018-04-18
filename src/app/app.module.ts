import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from './../environments/environment'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { ClientsComponent } from './clients/clients.component';
import { ShopComponent } from './shop/shop.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TrashComponent } from './trash/trash.component';
import { FooterComponent } from './footer/footer.component';
import { HomeStudiaComponent } from './home-studia/home-studia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    ClientsComponent,
    ShopComponent,
    ContactsComponent,
    TrashComponent,
    FooterComponent,
    HomeStudiaComponent
  ],
  imports: [

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeStudiaComponent
      },
      {
        path:'clients',
        component:ClientsComponent
      },
      {
        path:'shop',
        component:ShopComponent
      },
      {
        path:'contacts',
        component:ContactsComponent
      },
      {
        path:'trash',
        component:TrashComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
