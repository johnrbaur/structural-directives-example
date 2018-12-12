import { Component } from '@angular/core';

import { EmployeeService, Employee } from './api/employee.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees: Observable<Employee[]>;
  chooseFile = new Subject<FileList>();

  constructor(empService: EmployeeService) {
    this.employees = empService.getEmployees();

    this.chooseFile.subscribe(files => console.log({ files }));
  }
}
