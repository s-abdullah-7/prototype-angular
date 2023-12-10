import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

// Menu
export interface Menu {
	headTitle?: string,
	headTitle2?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeValue?: string;
	badgeClass? :string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
	Menusub?: boolean;
	target?:boolean
}

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search: boolean = false;

	// Language
	public language: boolean = false;

	// Mega Menu
	public megaMenu: boolean = false;
	public levelMenu: boolean = false;
	public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Full screen
	public fullScreen: boolean = false;

	constructor(private router: Router) {
		this.setScreenWidth(window.innerWidth);
		fromEvent(window, 'resize').pipe(
			debounceTime(1000),
			takeUntil(this.unsubscriber)
		).subscribe((evt: any) => {
			this.setScreenWidth(evt.target.innerWidth);
			if (evt.target.innerWidth < 991) {
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			}
			if(evt.target.innerWidth < 1199) {
				this.megaMenuColapse = true;
			}
		});
		if(window.innerWidth < 991) { // Detect Route change sidebar close
			this.router.events.subscribe(event => {
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			});
		}
	}

	ngOnDestroy() {
		this.unsubscriber.next;
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: Menu[] = [
		// {
		// 	headTitle: 'MAIN',
		// },
		// {
		// 	title: 'Dashboard', icon: 'home', type: 'sub', Menusub: true, active: false, children: [
		// 		{ path: '/dashboard/analytics', title: 'Analytics', type: 'link' },

		// 		]
		// },
    // {
		// 	headTitle: 'Testing',
		// },
		// {
		// 	title: 'Management', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
		// 		{ path: '/employee/create', title: 'Add Employee', type: 'link' },
		// 		{ path: '/employee/table', title: 'Employee Table', type: 'link' },
    //     { path: 'employee/chart' , title: 'Chart', type: 'link'}
		// 		]
		// },
    {
			headTitle: '',
		},
		{
			title: 'Home', icon: 'home', active: true, badgeClass:'badge badge-sm bg-secondary badge-hide', badgeValue:'new', path: '/home/home', type: 'link'
    },
		{
			title: 'Program Status', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        { path: '/home/statistics', title: 'Statistics', type: 'link' },
				{ path: '#', title: 'Trends', type: 'link' },
				]

		},
    {
			title: 'Pipeline Data', icon: 'shopping-bag', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: 'Operator Search', type: 'link' },
        { path: '#', title: 'IU Search', type: 'link' },
        { path: '#', title: 'Edit Date', type: 'link' },
				]

		},
    {
			title: 'Inspection', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: 'Assignments', type: 'link' },
        { path: '#', title: 'Planning', type: 'link' },
        { path: '#', title: 'Training/Qualifications', type: 'link' },
        { path: '#', title: 'Deferrals', type: 'link' },
        { path: '#', title: 'CBAT', type: 'link' },
				]

		},
    {
			title: 'Investigation', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        // { path: '#', title: 'Statistics', type: 'link' },
				]

		},
    {
			title: 'State Waiver', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        { path: '/dashboard/state-waiver', title: 'Overview', type: 'link' },
				]

		},
    {
			title: 'Mapping System', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        // { path: '#', title: 'Statistics', type: 'link' },
				]

		},
    {
			title: 'Integrity Management', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        // { path: '#', title: 'Statistics', type: 'link' },
				]

		},
    {
			title: 'Enforcement', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        // { path: '#', title: 'Statistics', type: 'link' },
				]

		},
    {
			title: 'Document Library', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        // { path: '#', title: 'Statistics', type: 'link' },
				]

		},

    {
			title: 'Calfire Portal', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: 'Annual Reporting', type: 'link' },
        { path: '#', title: 'Integrity Testing', type: 'link' },
        { path: '#', title: 'Hydrostatic Testing', type: 'link' },
				]

		},
    {
			title: 'Admin', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        { path: '/dashboard/admin', title: 'User Roles', type: 'link' },
        { path: '/', title: 'Change Management', type: 'link' },
        { path: '#', title: 'Billing', type: 'link' },
				]

		},

		// {
		// 	headTitle: 'COMPONENTS',
		// },
		// {
		// 	title: 'Widgets', icon: 'grid', active: true, badgeClass:'badge badge-sm bg-secondary badge-hide', badgeValue:'new', path: '/widget/widget', type: 'link'
    // },


	]





















	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);}
