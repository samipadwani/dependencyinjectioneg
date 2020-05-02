import { Component, OnInit, Host } from '@angular/core';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.css'],
  providers:[{provide:NameServiceService, useValue: { emoji: 'child2component' }}]
})
export class Child2Component implements OnInit {

  constructor(private nameServiceService: NameServiceService) { }

  ngOnInit() {
  }

}