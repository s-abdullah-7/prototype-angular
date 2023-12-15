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
			title: 'Dashboard', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        { path: '/home/statistics', title: 'Program Status', type: 'link' },
				{ path: '#', title: 'Pipeline', type: 'link' },
				{ path: '', title: 'Inspection', type: 'link' },
				{ path: 'Investigation', title: 'Integrity Management', type: 'link' },
				{ path: 'State Waiver', title: 'Investigation', type: 'link' },
				{ path: '/dashboard/state-waiver', title: 'State Waiver', type: 'link' },
				{ path: 'State Waiver', title: 'Enforcement', type: 'link' },
				{ path: 'State Waiver', title: 'Pipeline Safety Information', type: 'link' },
				]

		},


    {
			title: 'Asset Search', icon: 'shield', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
				]

		},
        {
			title: 'Mapping System', icon: 'bar-chart', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
				]

		},
    {
			title: 'Document Library', icon: 'file', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
				]

		},
        {
			title: 'PIMS Links', icon: 'file', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
				]

		},

     {
			title: 'CAL FIRE Intranet', icon: 'grid', type: 'sub', Menusub: true, active: false, children: [
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
        { path: '#', title: '', type: 'link' },
				]

		},
    {
			title: 'Admin', icon: 'database', type: 'sub', Menusub: true, active: false, children: [
        { path: '/user/dashboard', title: 'Dashboard', type: 'link' },
        { path: '/dashboard/admin', title: 'User Management', type: 'link' },
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
