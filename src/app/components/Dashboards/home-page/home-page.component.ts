import { Component , OnInit , AfterViewInit ,ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('acc') acc: NgbAccordion;

  ngAfterViewInit() {
    setTimeout(() => {
      this.acc.collapseAll();
      this.acc.expand('panel1');
    });
  }



  constructor() { }

  ngOnInit(): void {
  }

  public isCollapsed20 = false;
  public isClosed20 = false;

  public isCollapsed1 = false;
  public isClosed1 = false;

  public isCollapsed2 = false;
  public isClosed2 = false;

  public isCollapsed3 = false;
  public isClosed3 = false;

  public isCollapsed4 = false;
  public isClosed4 = false;

  public isCollapsed5 = false;
  public isClosed5 = false;

  public isCollapsed6 = false;
  public isClosed6 = false;

  public isCollapsed7 = false;
  public isClosed7 = false;

  public isCollapsed8 = false;
  public isClosed8 = false;

  public isCollapsed9 = false;
  public isClosed9 = false;

  public isCollapsed10 = false;
  public isClosed10 = false;

  public isCollapsed11 = false;
  public isClosed11 = false;



  Collapsetoggle1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }

  Closetoggle1() {
    this.isClosed1 = true
  }


  Collapsetoggle2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }

  Closetoggle2() {
    this.isClosed2 = true
  }

  Collapsetoggle3() {
    this.isCollapsed3 = !this.isCollapsed3;
  }

  Closetoggle3() {
    this.isClosed3 = true
  }

  Collapsetoggle4() {
    this.isCollapsed4 = !this.isCollapsed4;
  }

  Closetoggle4() {
    this.isClosed4 = true
  }

  Collapsetoggle5() {
    this.isCollapsed5 = !this.isCollapsed5;
  }

  Closetoggle5() {
    this.isClosed5 = true
  }

  Collapsetoggle6() {
    this.isCollapsed6 = !this.isCollapsed6;
  }

  Closetoggle6() {
    this.isClosed6 = true
  }

  Collapsetoggle7() {
    this.isCollapsed7 = !this.isCollapsed7;
  }

  Closetoggle7() {
    this.isClosed7 = true;
  }

  Collapsetoggle8() {
    this.isCollapsed8 = !this.isCollapsed8;
  }

  Closetoggle8() {
    this.isClosed8 = true;
  }

  Collapsetoggle9() {
    this.isCollapsed9 = !this.isCollapsed9;
  }

  Closetoggle9() {
    this.isClosed9 = true;
  }

  Collapsetoggle10() {
    this.isCollapsed10 = !this.isCollapsed10;
  }

  Closetoggle10() {
    this.isClosed10 = true;
  }

  Collapsetoggle11() {
    this.isCollapsed11 = !this.isCollapsed11;
  }

  Collapsetoggle20() {
    this.isCollapsed20 = !this.isCollapsed20;
  }


  Closetoggle11() {
    this.isClosed11 = true;
  }

    Closetoggle20() {
    this.isClosed20 = true;
  }


}
