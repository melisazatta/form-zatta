import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor( private formBuilder: FormBuilder ){
    this.userForm = this.formBuilder.group({
      
      nombre: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),

      email: this.formBuilder.control('', [Validators.required, Validators.email]), //['']
      
      password: this.formBuilder.control('', Validators.required),
      
    })
  }

  //nombre

  get nombreControlIsInvalid() {
    return this.userForm.controls['nombre'].invalid && this.userForm.controls['nombre'].touched;
  }


  //email

  get emailControl() {
    return this.userForm.controls['email'];
  }

  get emailControlIsInvalid() {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  //password

  get passwordControl() {
    return this.userForm.controls['password'];
  }

  onSubmit(): void {
    if (this.userForm.invalid){
      alert('Formulario invalido');
    } else {
          console.log(this.userForm.value);

    }

    
  }

}
