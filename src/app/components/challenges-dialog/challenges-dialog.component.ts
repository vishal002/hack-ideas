import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-challenges-dialog',
  templateUrl: './challenges-dialog.component.html',
  styleUrls: ['./challenges-dialog.component.scss']
})
export class ChallengesDialogComponent implements OnInit {
  createChallengesForm: FormGroup;
  options: string[] = ['tech', 'feature'];

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChallengesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,) { }

  ngOnInit(): void {
    this.createChallengesForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      tags: [null, Validators.required]
    });
  }

  ngSubmit() {
    const dataToSubmit = {
      id: Math.floor(Math.random() * 1000),
      count: 0,
      createDateTime: (new Date()).toISOString()
    }
    if (this.createChallengesForm.valid) {
      this.data = { ...dataToSubmit, ...this.createChallengesForm.value }
      // update localstore data
      let existingData = JSON.parse(localStorage.getItem('data')) || [];
      existingData.unshift(this.data);
      localStorage.removeItem('data');
      localStorage.setItem('data', JSON.stringify(existingData));
    }
  }

  cancelChallenge() {
    this.createChallengesForm.reset();
  }

}
