import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovie]'
})
export class MovieDirective implements OnInit {

  @HostBinding('class.first') myFirst:boolean;

  constructor() { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myFirst = true;
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myFirst = false;
  }

}
