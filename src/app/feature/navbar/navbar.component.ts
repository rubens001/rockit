import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor() {}

  // ROUTES: any[] = new Array();
  ROUTES: RouteInfo[] = [
    { path: '', title: 'Navbar2', menuType: MenuType.BRAND },
    { path: 'browse', title: 'browse', menuType: MenuType.LEFT },
    { path: 'test', title: 'test', menuType: MenuType.RIGHT },
    { path: 'contact', title: 'contact', menuType: MenuType.RIGHT }
  ];

  ngOnInit() {
    this.menuItems = this.ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = this.ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }
  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }


}
enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
}
