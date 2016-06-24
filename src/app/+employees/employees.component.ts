import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/services/employees.service';
import { Employee } from '../shared/models/employee';


@Component({
  moduleId: module.id,
  selector: 'app-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {
	employeesArr: Array<Employee>;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
  	this.employeesService.getEmployees()
      .then(employees => {
  			this.employeesArr = employees;
    });
   
  }

}
