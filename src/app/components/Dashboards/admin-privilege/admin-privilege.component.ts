import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { data } from 'autoprefixer';
import { UserService } from 'src/app/shared/services/UserService';



@Component({
  selector: 'app-admin-privilege',
  templateUrl: './admin-privilege.component.html',
  styleUrls: ['./admin-privilege.component.scss']
})


export class AdminPrivilegeComponent implements OnInit{

  users: any[] = [];


  selectedCategory: string = '';
  userRoles: string[] = []; // Array to hold the dynamically loaded roles

  externalRoles: string[] = [
    'Pipeline Operator',
    'Hydrostatic Testing Firm'
  ];

  internalRoles: string[] = [
    'Management',
    'SPSE',
    'PSE',
    'Investigation',
    'Investigation SPSE',
    'IM Notification',
    'IM HT Reviewer',
    'IM ILI Reviewer',
    'IM SPSE',
    'HTF Reviewer',
    'Inspection SPSE',
    'Enforcement SPSE',
    'State Waiver Reviewer',
    'Construction Notification',
    'Mapping'
];

  dashboardModules: string[] = [
  'Program Status',
  'Pipeline',
  'Inspection',
  'Integrity Management',
  'Investigation',
  'State Waiver',
  'Enforcement',
  'Pipeline Safety Information'

 ]

 


constructor(private userService: UserService){}

ngOnInit(): void {
   this.userService.getUsers().subscribe((data: any[]) => {
    this.users = data;
   })

  

}


onCategoryChange(category: string) {
  this.selectedCategory = category;
  if (category === 'External') {
    this.userRoles = this.externalRoles;
  } else if (category === 'Internal') {
    this.userRoles = this.internalRoles;
  } else {
    this.userRoles = []; // Clear the roles array for any other category
  }
}




}
