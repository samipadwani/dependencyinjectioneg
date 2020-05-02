import { Component, OnInit, Host } from '@angular/core';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.css'],
  providers:[{provide:NameServiceService, useValue: { emoji: 'child1Component' }}]
})
export class Child1Component implements OnInit {

  constructor(private nameService: NameServiceService) { }

  ngOnInit() {
  }

}