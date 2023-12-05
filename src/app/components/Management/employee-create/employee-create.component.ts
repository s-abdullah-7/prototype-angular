import { Component , OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/shared/services/Model/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  employeeModel:EmployeeModel = new EmployeeModel();
  employeeTable:any = [];


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

  AddEmployee(employee:EmployeeModel):void{
    console.log('AddEmployee method triggered!');
    this.employeeService.addEmployee(employee).subscribe(res =>{
      if(res){
        alert(`The Employee ${employee.Name} registered succesfully.`)
        this.clear();
        this.onShowEmployee();
      }else{
        alert('Error!:( ')
      }

    } );

  }

  clear(){
    this.employeeModel.Id = 0;
    this.employeeModel.Name = "";
    this.employeeModel.Age = 0;
    this.employeeModel.City = "";
    this.employeeModel.Salary = 0;
  }

}

