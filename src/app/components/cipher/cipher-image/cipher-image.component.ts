import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CipherService } from 'src/app/services/cipher/cipher.service';
import { saveAs } from 'file-saver';

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
  blob: Blob | undefined;

  constructor(
    private fb: FormBuilder,
    private cipherService: CipherService,
    private sanitizer: DomSanitizer
  ) {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.blob = undefined;
      };

      console.log('hola')
      this.file = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  delete() {
    this.blob = undefined;
    this.url = this.DEFAULT_IMAGE_PREVIEW;
    this.fgCipher.get('image')?.setValue(null);
  }

  download() {
    const contentType = 'image/png';
    const blob = new Blob([this.blob!], {
      type: contentType,
    });

    const file = new File([blob], 'FileName.png', {
      type: contentType,
    });

    saveAs(file);
  }

  process() {
    if (this.file)
      this.cipherService.cipherImage(this.file!).subscribe((result: any) => {
        this.file = new File([result], "imagennn.png");;
        this.blob = result;
        let objectURL = URL.createObjectURL(result);
        this.url = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
  }
}
