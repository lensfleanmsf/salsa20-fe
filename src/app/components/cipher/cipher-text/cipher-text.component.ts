import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CipherService } from 'src/app/services/cipher/cipher.service';

@Component({
  selector: 'app-cipher-text',
  templateUrl: './cipher-text.component.html',
  styleUrls: ['./cipher-text.component.scss'],
})
export class CipherTextComponent {
  fgCipher = this.fb.group({
    text: [null, Validators.required],
  });

  ciphertext: string | undefined;

  constructor(private fb: FormBuilder, private cipherService: CipherService) {}

  process() {
    if (this.fgCipher.valid) {
      this.cipherService
        .cipherText(this.fgCipher.value.text!)
        .subscribe((ciphertext) => {
          this.ciphertext = ciphertext;
        });
      }
  }
}
