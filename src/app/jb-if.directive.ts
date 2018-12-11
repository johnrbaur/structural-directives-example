import { Directive, TemplateRef, ViewContainerRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[jbIf]'
})
export class JbIfDirective implements OnChanges {
  @Input() jbIf: boolean;

  constructor(
    // Represents an embedded template that can be used to instantiate embedded views
    private templateRef: TemplateRef<any>,
    // Represents a container where one or more views can be attached to a component
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnChanges() {
    this.viewContainerRef.clear();
    if (this.jbIf) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
