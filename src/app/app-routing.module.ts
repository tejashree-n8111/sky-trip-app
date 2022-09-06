import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthanticationGuard } from './core/guard-service/authantication.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './features/comp/login/login.component';
import { BookFlightComponent } from './features/module/book-flight/book-flight.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'searchFlight',
    loadChildren: () => import('./features/module/search-flights/search-flights.module').then(m => m.SearchFlightsModule),
    canDeactivate: [AuthanticationGuard]
  },
  {
    path: 'myTrip', loadChildren: () => import('./features/module/my-trip/my-trip.module').then(m => m.MyTripModule), canActivate: [AuthanticationGuard]
  },
  {
    path: 'holidayP',
    loadChildren: () => import('./features/module/holiday-packages/holiday-packages.module').then(m => m.HolidayPackagesModule),
    canLoad: [AuthanticationGuard], canActivate: [AuthanticationGuard]
  },
  {
    path: 'hotels',
    loadChildren: () => import('./features/module/book-hotels/book-hotels.module').then(m => m.BookHotelsModule),

  },
  { path: 'bookFlight', component: BookFlightComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
