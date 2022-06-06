import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CipherService } from 'src/app/services/cipher/cipher.service';

@Component({
  selector: 'app-cipher-image',
  templateUrl: './cipher-image.component.html',
  styleUrls: ['./cipher-image.component.scss'],
})
export class CipherImageComponent {
  DEFAULT_IMAGE_PREVIEW: string =
    './../../../../assets/images/default-preview-image.png';

  fgCipher = this.fb.group({
    image: [null, Validators.required],
  });

  url: any = this.DEFAULT_IMAGE_PREVIEW;

  file: File | undefined;

  constructor(private fb: FormBuilder, private cipherService: CipherService) {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      this.file = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  delete() {
    this.url = this.DEFAULT_IMAGE_PREVIEW;
    this.fgCipher.get('image')?.setValue(null);
  }

  process() {
    if (this.fgCipher.valid) this.cipherService.cipherImage(this.file!);
  }
}
