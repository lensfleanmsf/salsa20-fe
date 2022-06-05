import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.scss'],
})
export class CipherComponent implements OnInit {
  fgCipher = this.fb.group({
    image: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
