import { NgModule } from '@angular/core';
import { CamplNgxComponent } from './campl-ngx.component';
import { CamplInnerComponent } from './campl-inner/campl-inner.component';



@NgModule({
  declarations: [CamplNgxComponent, CamplInnerComponent],
  imports: [
  ],
  exports: [CamplNgxComponent]
})
export class CamplNgxModule { }
