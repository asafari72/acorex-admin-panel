import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
    templateUrl: './master.layout.html',
    styleUrls: ['./master.layout.scss'],
    encapsulation:ViewEncapsulation.None
})
export class MasterLayout {


    menuItems: any[] = [
        {
            path: 'admin/dashboard',
            text: 'Dashboard',
            icon: 'home',
            active: true
        },
        {
            path: 'admin/users',
            text: 'Users',
            icon: 'group',
            active: false
        },
        {
            path: 'admin/posts',
            text: 'Posts',
            icon: 'article',
            active: false
        },
        {
            path: 'admin/comments',
            text: 'Comments',
            icon: 'comment',
            active: false
        },
        {
            path: 'admin/settings',
            text: 'Settings',
            icon: 'settings',
            active: false
        }
    ];
    constructor(public layoutService: LayoutService) { }


}
