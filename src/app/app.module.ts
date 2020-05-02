import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';
import { NameServiceService } from './name-service.service';
import { TestDirective } from './test.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParentComponentComponent, Child1Component, Child2Component, TestDirective ],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: NameServiceService, useValue: { emoji: 'appModule' } }]
})
export class AppModule { }
