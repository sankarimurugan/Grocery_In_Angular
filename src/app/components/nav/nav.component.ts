import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor() { }

  navbarVariable: boolean = true;
  loginVariable: boolean = true;
  cartVariable: boolean = true;
  lickVariable: boolean = true;
  menuShow() {
    this.navbarVariable = !this.navbarVariable;
    this.loginVariable = true;
    this.cartVariable = true;
    this.lickVariable = true;
    // this.renderer.removeClass(event.target, className);
  }
  cartShow() {
    this.cartVariable = !this.cartVariable;
    this.loginVariable = true;
    this.navbarVariable = true;
    this.lickVariable = true;
  }
  loginShow() {
    this.loginVariable = !this.loginVariable;
    this.cartVariable = true;
    this.navbarVariable = true;
    this.lickVariable = true;
  }
  lickShow() {
    this.lickVariable = !this.lickVariable;
    this.cartVariable = true;
    this.navbarVariable = true;
    this.loginVariable = true;
  }


}


// showMe:boolean=true
// toogleMenu(){
//   this.showMe=!this.showMe
// }




//   navbg:any;
//   @HostListener('document.scroll') scrollover() {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
// this.navbg={'background':'red'}
//     }else{
//       this.navbg={

//       }
//     }

//   }