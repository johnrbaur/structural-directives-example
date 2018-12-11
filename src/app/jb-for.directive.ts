import { Directive, TemplateRef, ViewContainerRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[jbFor]'
})
export class JbForDirective implements OnChanges {
  @Input() jbForIn: any[];
  @Input() jbForIf: (any) => boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnChanges() {
    this.viewContainerRef.clear();
    if (Array.isArray(this.jbForIn)) {
      this.jbForIn
        .filter(item => !this.jbForIf || this.jbForIf(item))
        .forEach((item, index) => {
          const context = {
            $implicit: item,
            index
          };
          this.viewContainerRef.createEmbeddedView(this.templateRef, context);
        });
    }
  }

}
