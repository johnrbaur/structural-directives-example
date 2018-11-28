import { Component, Input } from '@angular/core';

import { Employee } from '../api/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  @Input() employees: Employee[];
  showTitle = true;

  constructor() { }

}
