import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsListComponent } from './modules/applications/applications-list/applications-list.component';
import { PreScreenerLayoutComponent } from './modules/pre-screener/pre-screener-layout/pre-screener-layout.component';
import { ScreenerLayoutComponent } from './modules/screener/screener-layout/screener-layout.component';
import { AuthGuard } from '@app/core';


const routes: Routes = [
  { path: '', component: ApplicationsListComponent },
  { path: 'prescreener', component: PreScreenerLayoutComponent, canActivate: [AuthGuard]  },
  { path: 'screener', component: ScreenerLayoutComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
