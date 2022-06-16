import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { CardComponent } from './components/card/card.component';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    ItemsListComponent,
    CardComponent,
    CharacterViewComponent,
    SerieViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
