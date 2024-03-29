import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/UserService';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashbaord.component.html',
  styleUrls: ['./admin-dashbaord.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  dateObj: Date
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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });

    this.dateObj = new Date()
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    if (category === 'External') {
      this.userRoles = this.externalRoles;
    } else if (category === 'Internal') {
      this.userRoles = this.internalRoles;
    }
  }


  editUser(userId: number) {
    this.router.navigate([`/user/edit/${userId}`]); // Navigates to the user edit page with the specific ID
  }



}
