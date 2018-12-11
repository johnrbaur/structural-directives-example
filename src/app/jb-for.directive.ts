import { Directive, TemplateRef, ViewContainerRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[jbFor]'
})
export class JbForDirective implements OnChanges {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnChanges() {

  }

}
