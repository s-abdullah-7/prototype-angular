import { Component , OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/shared/services/Model/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {
  employeeModel:EmployeeModel = new EmployeeModel();
  employeeTable:any = [];

  constructor(private employeeService:EmployeeService,  private router: Router){ }

  ngOnInit(): void{
    this.onShowEmployee();
  }

  onShowEmployee(){
    this.employeeService.getAllEmployee().subscribe( res => {
      this.employeeTable = res;
    })
  }

  confirmDelete(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.deleteEmployee(id);
    }
  }

  private deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        this.onShowEmployee();
      },
      (error) => {
        console.error('Error deleting employee:', error);
        alert('An error occurred while deleting the employee.');
      }
    );
  }

  clear(){
    this.employeeModel.Id = 0;
    this.employeeModel.Name = "";
    this.employeeModel.Age = 0;
    this.employeeModel.City = "";
    this.employeeModel.Salary = 0;
  }
  editbtn(): void {
    this.router.navigateByUrl('/employee/update');
 }

}
