import { NgLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { setEmitFlags } from 'typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:string;
  type:string;
  constructor() {  
     this.login=sessionStorage.getItem('LoggedIn')
  this.type=sessionStorage.getItem('UserRole')}
  ngDoCheck(){
    this.login=sessionStorage.getItem('LoggedIn')
    this.type=sessionStorage.getItem('UserRole')
  }

  ngOnInit(): void {
    this.login=sessionStorage.getItem('LoggedIn')
    this.type=sessionStorage.getItem('UserRole')
    
  }
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
}
