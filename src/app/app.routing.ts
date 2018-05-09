import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishesComponent } from './wishes/wishes.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'wishes',
    component: WishesComponent
  },
  {
    path: 'fundings/:id',
    component: ItemDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
