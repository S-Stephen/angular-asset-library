import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "campl-ngx-campl-ngx",
  template: `
    <p>
      campl-ngx works! Yippee!
    </p>
    <h3>test string</h3>
    <campl-ngx-campl-inner></campl-ngx-campl-inner>
  `,
  styleUrls: ["./campl-ngx-component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CamplNgxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
