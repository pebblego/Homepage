import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './landing-page/main-layout/main-layout.component';
// import { MainelayoutComponent } from './nft-token-dashboard/mainelayout/mainelayout.component';

const routes: Routes = [
  
  {
    path: '',
    component:MainLayoutComponent,
    children:[ {
      path: 'landingpage',
       loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
    }]
  },
  // {
  //   path: 'dashboard',
  //   component:MainelayoutComponent,
  //   children:[
  //     {
  //     path:'',
  //     loadChildren: () => import('./nft-token-dashboard/nft-token-dashboard.module').then(m => m.NFTTokenDashboardModule)
  //   }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
