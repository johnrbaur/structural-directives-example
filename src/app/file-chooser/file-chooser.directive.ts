import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  Renderer,
  ComponentRef,
  OnDestroy,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FileChooserComponent } from './file-chooser.component';

@Directive({
  selector: '[jbFileChooser]'
})
export class FileChooserDirective implements OnDestroy {
  @Input() jbFileChooser: Subject<FileList>;
  private cRef: ComponentRef<FileChooserComponent>;
  private destroy = new Subject();

  constructor(
    template: TemplateRef<any>,
    vcr: ViewContainerRef,
    cfr: ComponentFactoryResolver,
    // Used to intercept rendering calls
    renderer: Renderer,
  ) {
    const el: ElementRef = vcr.createEmbeddedView(template).rootNodes[0];
    renderer.listen(el, 'click', this.chooseFile.bind(this));

    const factory = cfr.resolveComponentFactory(FileChooserComponent);
    this.cRef = vcr.createComponent(factory);

    this.cRef.instance.processFiles.pipe(
      takeUntil(this.destroy)
    ).subscribe((files: FileList) => this.jbFileChooser && this.jbFileChooser.next(files));
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  chooseFile() {
    this.cRef.instance.chooseFile();
  }

}
