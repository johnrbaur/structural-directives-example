import { Component } from '@angular/core';

import { EmployeeService, Employee } from './api/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees: Observable<Employee[]>;

  constructor(empService: EmployeeService) {
    this.employees = empService.getEmployees();
  }
}
