  import { Injectable } from '@angular/core';
  import { Observable, of } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class UserService {





    private users = [
      {
        id: 1,
        name: "AIMEE CAUGUIRAN",
        address: "XYZ",
        number: 1234,
        userCategory: "External",
        userRole: "Pipeline Operator"
      },
      {
        id: 2,
        name: "BOB GORHAM",
        address: "XYZ",
        number: 1234,
        userCategory: "External",
        userRole: "Engineer"
      },
      {
        id: 3,
        name: "CHUCK MACDONALD",
        address: "XYZ",
        number: 1234,
        userCategory: "Internal",
        userRole: "Manager"
      },
      {
        id: 4,
        name: "DAN LEE",
        address: "XYZ",
        number: 1234,
        userCategory: "External",
        userRole: "Analyst"
      },
      {
        id: 5,
        name: "DURGA SHRESHTA",
        address: "XYZ",
        number: 1234,
        userCategory: "External",
        userRole: "Technician"
      },
      {
        id: 6,
        name: "ENRIQUE JIMENEZ",
        address: "XYZ",
        number: 1234,      
        userCategory: "Internal",
        userRole: "Supervisor"
      },
      {
        id: 7,
        name: "HA NGUYEN",
        address: "XYZ",
        number: 1234,      
        userCategory: "External",
        userRole: "Inspector"
      },
      {
        id: 8,
        name: "HOSSEIN MONFARED",
        address: "XYZ",
        number: 1234,      
        userCategory: "External",
        userRole: "Technician"
      },
      {
        id: 9,
        name: "JUSTIN HARER",
        address: "XYZ",
        number: 1234,      
        userCategory: "Internal",
        userRole: "Manager"
      },
    ];

    constructor() { }

    // Fetch user by ID (simulated from hardcoded data)
    getUser(userId: number): Observable<any> {
      const user = this.users.find(u => u.id === userId);
      return of(user);
    }



    // Update user details (simulated from hardcoded data)
    updateUserDetails(userId: number, userData: any): Observable<any> {
      const userIndex = this.users.findIndex(u => u.id === userId);
      if (userIndex !== -1) {
        this.users = { ...this.users, ...userData };
      }
      return of(userData);
    }

    getUsers(): Observable<any[]> {
      return of(this.users);
    }
  }
