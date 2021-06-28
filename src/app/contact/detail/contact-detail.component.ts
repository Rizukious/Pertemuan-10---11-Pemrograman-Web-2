import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Contact from '../contact';

@Component({
    selector: 'contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls : ['./contact-detail.component.css']
})

export class ContactDetailComponent implements OnInit {
    // Pembuatan Variable name
    // name = '';

    // Pemanggilan model Contact
    @Input() contact:Contact = {id: 0, name: '', email: '', phone: ''};

    // Pembuatan event onSave contact
    @Output() onSave = new EventEmitter<Contact>();
    // Pembuatan event onCancel contact
    @Output() onCancel = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    // Pembuatan Event onSave
    onSaveContact = () => {
        // kita emit si contact
        this.onSave.emit(this.contact);
    }

    // Pembuatan onCancel Save
    onCancelSave = () => {
        this.onCancel.emit();
    }
}