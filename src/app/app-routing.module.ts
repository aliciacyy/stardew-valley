import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VillagersComponent }   from './villagers/villagers.component';
import { ShopsComponent } from './shops/shops.component';
import { FishComponent } from './fish/fish.component';
import { VillagerDetailComponent } from './detail/villager-detail/villager-detail.component';
import { HomeComponent } from './home/home.component';

//{ path: '', redirectTo: '', pathMatch: 'full' },
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'villagers', component: VillagersComponent },
  { path: 'villagers/villager-details/:name', component: VillagerDetailComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'fish', component: FishComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
