import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup ({
   name: new FormControl(''),
   email: new FormControl(''),
   number: new FormControl(''),
   subject: new FormControl(''),
   message: new FormControl('')

  //  if (FormControl)
  });

  contactUser() {
    console.warn(this.contactForm.value)
  }
}
