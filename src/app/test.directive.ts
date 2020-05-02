import { Directive, OnInit, ElementRef, Host } from '@angular/core';
import { NameServiceService } from './name-service.service';

@Directive({
  selector: '[appTest]',
  providers:[{provide: NameServiceService, useValue: {emoji: 'directive'}}]
})
export class TestDirective implements OnInit {

  constructor(@Host() private nameService: NameServiceService,
  private elRef: ElementRef) { }

  ngOnInit() {
    console.log('inside Directive');
    this.elRef.nativeElement.innerText = this.nameService.emoji;
    // console.log(this.nameService.emoji);
  }

}