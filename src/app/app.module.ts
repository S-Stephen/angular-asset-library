import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CamplNgxModule } from "campl-ngx";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CamplNgxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
