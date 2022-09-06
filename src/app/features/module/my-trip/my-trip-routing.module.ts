import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthanticationGuard } from 'src/app/core/guard-service/authantication.guard';
import { CancelledTripComponent } from './cancelled-trip/cancelled-trip.component';
import { CompletedTripComponent } from './completed-trip/completed-trip.component';
import { MyTripComponent } from './my-trip.component';
import { UpcomingTripComponent } from './upcoming-trip/upcoming-trip.component';

const routes: Routes = [
  {
    path: '', component: MyTripComponent,
    canActivateChild: [AuthanticationGuard],
    children: [
      { path: 'cancelledT', component: CancelledTripComponent },
      { path: 'completedT', component: CompletedTripComponent },
      { path: 'upcomingT', component: UpcomingTripComponent },
      // { path: '', pathMatch: 'full', redirectTo: 'cancelledT' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTripRoutingModule { }
