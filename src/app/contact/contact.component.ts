import { Component, OnInit } from '@angular/core';
import Contact from './contact';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls : ['./contact.component.css']
})

export class contactComponent implements OnInit {
    // Setting Default menjadi tampilan dashboard
    display = 'detail';

    // Pembuatan sebuah variable bertipe array
    contacts:Contact[] = [
        {
            id: 1,
            name: 'Agus',
            email: 'agus@gmail.com',
            phone: '0821-3345-1212'
        },
        {
            id: 2,
            name: 'Budi',
            email: 'budi@gmail.com',
            phone: '0821-2932-4442'
        },
        {
            id: 3,
            name: 'Charlie',
            email: 'chaerlie@gmail.com',
            phone: '0821-9121-3499'
        }
    ];

    contact!:Contact;
    // pembuatan variable index
    index = -1;
    constructor() {
        this.contact = {id: 0, name: '', email: '', phone: ''}
     }

    ngOnInit() { }

    // Buatkan sebuah Event onClick Button
    // paramater displaynya apa
    onMenuClick = (display : string) => {
        this.display = display;
    }

    // Buat Event onSelect 
    onSelect = (contact:Contact) => {
        this.index = this.contacts.indexOf(contact);
        this.contact = {...contact};
        // dan ubah display menjadi detail
        this.display = 'detail';
    }

    // Buat Event onSave
    onSave = (contact:Contact) => {
        this.display = 'list';
        if(this.index > -1) {
            // jika lebih besar dari pada -1 maka update data
            this.contacts[this.index] = contact;
        }else{
            // jika tidak input
            this.contacts.push(contact);
        }
    }

    // Buat Event onCancel
    onCancel = () => {
        this.display = 'list';
    }
}