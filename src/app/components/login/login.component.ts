import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      employeeId: [null, Validators.required]
    })
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
    sessionStorage.setItem('user', this.profileForm.controls.employeeId.value);
  }

}
