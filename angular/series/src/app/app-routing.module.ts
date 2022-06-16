import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/series' },
  { path: 'series', component: ItemsListComponent },
  { path: 'serie/:idserie', component: SerieViewComponent },
  { path: 'personajes', component: ItemsListComponent },
  { path: 'personaje/:idcharacter', component: CharacterViewComponent },
  { path: '**', redirectTo: '/series' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
