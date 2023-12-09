import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/UserService';  // Import your user service if you have one

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userId: number; // Holds the ID of the user to be edited
  user: any = {}; // Object to store user details

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService // Inject your user service if available
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Retrieve the user ID from the route parameter

      // Use your user service or any other method to fetch user details based on ID
      this.userService.getUser(this.userId).subscribe((user: any) => {
        this.user = user; // Assign fetched user details to the 'user' object
      });
    });
  }

  onSubmit() {
    // Use your user service or any method to update the user details
    // this.userService.updateUser(this.userId, this.user).subscribe(() => {
    //   this.router.navigate(['/']); // Navigate back to the main page or user list
    // });
  }
}
