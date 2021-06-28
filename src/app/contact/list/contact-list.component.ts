import { Component, Input, OnInit } from '@angular/core';
import Contact from '../contact';

@Component({
    selector: 'contact-list',
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent implements OnInit {
    @Input() contacts:Contact[] = [];
    constructor() { }

    ngOnInit() { }
}