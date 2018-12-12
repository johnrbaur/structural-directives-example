import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { JbIfDirective } from './jb-if.directive';
import { JbForDirective } from './jb-for.directive';
import { FileChooserDirective } from './file-chooser/file-chooser.directive';
import { FileChooserComponent } from './file-chooser/file-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    JbIfDirective,
    JbForDirective,
    FileChooserDirective,
    FileChooserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  entryComponents: [ FileChooserComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
