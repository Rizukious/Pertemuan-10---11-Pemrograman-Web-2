import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Contact from '../contact';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    // Pembuatan Input contacts dari contact.component.ts
    // yang akan dirender ke dashboard.component.html
    @Input() contacts:Contact[] = [];

    // Pembuatan Output untuk Parent di file contact.component.ts
    // Pembuatan output select dengan Event emitter data dari Contact
    @Output() select = new EventEmitter<Contact>();

    constructor() { }

    ngOnInit() { }

    // Pembuatan Method onSelect()
    onSelect = (contact:Contact) => {
        console.log('selected contact', contact);
        this.select.emit(contact);
    }
}