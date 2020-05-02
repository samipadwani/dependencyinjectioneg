import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  providers:[{provide:NameServiceService, useValue: { emoji: 'parentComponent' }}]
})
export class ParentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}