import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/UserService';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashbaord.component.html',
  styleUrls: ['./admin-dashbaord.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }


  editUser(userId: number) {
    this.router.navigate([`/user/edit/${userId}`]); // Navigates to the user edit page with the specific ID
  }
}
