import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishesComponent } from './wishes/wishes.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UserComponent } from './user/user.component';

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
  },
  {
    path: 'user',
    component: UserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
