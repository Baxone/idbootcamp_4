import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { PersonajesComponent } from './components/serie-view/personajes/personajes.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';
import { TemporadasComponent } from './components/serie-view/temporadas/temporadas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/series' },
  { path: 'series', component: ItemsListComponent },
  {
    path: 'serie/:idserie', component: SerieViewComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'reparto' },
      { path: 'reparto', component: PersonajesComponent },
      { path: 'temporadas', component: TemporadasComponent }
    ]
  },
  { path: 'personajes', component: ItemsListComponent },
  { path: 'personaje/:idcharacter', component: CharacterViewComponent },
  { path: 'canal/:channel', component: ItemsListComponent },
  { path: '**', redirectTo: '/series' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
