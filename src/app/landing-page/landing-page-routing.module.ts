import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from '../popup/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from '../popup/terms-of-use/terms-of-use.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
{path:'termsofuse', component:TermsOfUseComponent},
  {path:'privacypolicy', component:PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
