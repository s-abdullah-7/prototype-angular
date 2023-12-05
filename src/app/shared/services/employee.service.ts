import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeModel} from './Model/employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = 'https://localhost:7218/api/employee';
  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return this.http.get(this.url);
  }

  addEmployee(employee:EmployeeModel):Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(this.url, employee);
  }

  deleteEmployee(id:number){
    return this.http.delete(this.url + `/${id}`);
  }

  getEmployeebyId(id:number){
    return this.http.get(this.url + `/${id}`);
  }

  updateEmployee(id:number,employeeModel:EmployeeModel):Observable<EmployeeModel>{
    return this.http.put<EmployeeModel>(this.url + `/${id}`,employeeModel);
  }


}
