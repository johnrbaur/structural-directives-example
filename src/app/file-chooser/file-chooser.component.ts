import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.scss']
})
export class FileChooserComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  @Output() processFiles = new EventEmitter<FileList>();

  constructor() { }

  chooseFile() {
    this.fileInput.nativeElement.click();
  }

}
