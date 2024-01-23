import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/UserService';


@Component({
  selector: 'app-user-adding',
  templateUrl: './user-adding.component.html',
  styleUrls: ['./user-adding.component.scss']
})
export class UserAddingComponent {
  userCategoryName: string = '';
  userRoless: string = '';



  userRoles: string[] = []; 
  userId: number;
  user: any = {};
    users: any[] = [];
  roles: string[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

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



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    
  ) { }

  ngOnInit(): void {
    // Assigning predefined roles and categories directly
    this.roles = this.externalRoles; // Assign external roles initially
    this.categories = ['External', 'Internal']; // Assign predefined categories

    this.route.params.subscribe(params => {
      this.userId = +params['id'];
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
    });
  }

    onSelectCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    // Change roles based on selected category
    if (this.selectedCategory === 'External') {
      this.roles = this.externalRoles;
    } else if (this.selectedCategory === 'Internal') {
      this.roles = this.internalRoles;
    }else if (this.selectedCategory === 'Admin') {
      this.roles = this.internalRoles;
    }
  }

    onCategoryChange(category: string) {
    this.userCategoryName = category;
    this.selectedCategory = category;
    if (category === 'External') {
      this.userRoles = this.externalRoles;
    } else if (category === 'Internal') {
      this.userRoles = this.internalRoles;
    }else if (category === 'Admin') {
      this.userRoles = this.internalRoles;
    }

  }

  onSubmit() {
    this.userService.updateUserDetails(this.userId, this.user).subscribe(updatedUser => {
      // Handle success or error
    });
  }

}

