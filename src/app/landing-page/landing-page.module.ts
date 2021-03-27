import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainbodyComponent

    
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedmoduleModule,
    
  ],
  providers: [SharedmoduleModule],

})
export class LandingPageModule { }
