import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SuperHeroesListComponent } from './Components/super-heroes-list/super-heroes-list.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component';
import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroesListComponent,
    HeroDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterializeButtonModule,
    MaterializeCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
