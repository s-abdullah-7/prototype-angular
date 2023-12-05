import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/shared/services/Model/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit{
  employeeModel:EmployeeModel = new EmployeeModel();
  employeeTable:any = [];
  formModal:any;

  constructor(private employeeService:EmployeeService){

  }
  ngOnInit(): void{
    this.onShowEmployee();
  }

  onShowEmployee(){
    this.employeeService.getAllEmployee().subscribe( res => {
      this.employeeTable = res;
    })
  }



  UpdateEmployee(employeeModel:EmployeeModel):void{
    this.employeeService.updateEmployee(employeeModel.Id,employeeModel).subscribe(res =>{
      if(res){
        alert(`The Employee ${employeeModel.Id} updated seccessfully.`);
        this.clear();
        this.onShowEmployee();
      } else {
        alert('Error! :(')

      }
    })
  }

  clear(){
    this.employeeModel.Id = 0;
    this.employeeModel.Name = "";
    this.employeeModel.Age = 0;
    this.employeeModel.City = "";
    this.employeeModel.Salary = 0;
  }
}
