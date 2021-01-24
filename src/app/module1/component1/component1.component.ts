import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component1',
  // providers: [Service1],
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  num = 0;

  constructor(
    private myService1: Service1
  ) {
  }

  ngOnInit(): void {
    this.num = this.myService1.num;
  }

}
