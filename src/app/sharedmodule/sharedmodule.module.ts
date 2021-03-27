import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // CarouselModule,
    // MaterialModule

  ],
  exports:[
    CarouselModule,
    MaterialModule
  ],
  providers: [MaterialModule, CarouselModule]
})
export class SharedmoduleModule { }
