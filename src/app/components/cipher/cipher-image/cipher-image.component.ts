import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CipherService } from 'src/app/services/cipher/cipher.service';
import { saveAs } from 'file-saver';
import { v4 as uuidv4 } from 'uuid';
import { HttpEventType } from '@angular/common/http';

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

  loadingPercentage = 0;

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

      this.file = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  delete() {
    this.file = undefined;
    this.blob = undefined;
    this.url = this.DEFAULT_IMAGE_PREVIEW;
    this.fgCipher.get('image')?.setValue(null);
  }

  download() {
    const contentType = 'image/png';
    const blob = new Blob([this.blob!], {
      type: contentType,
    });

    const file = new File([blob], uuidv4() + '.png', {
      type: contentType,
    });

    saveAs(file);
  }

  process() {
    if (this.file && this.file.type == 'image/png')
      this.cipherService.cipherImage(this.file!).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.loadingPercentage = (event.loaded / event.total!) * 100;
        }
        if (event.type === HttpEventType.Response) {
          this.file = new File([event.body!], uuidv4() + '.png', {
            type: 'image/png',
          });
          this.blob = event.body!;
          let objectURL = URL.createObjectURL(event.body!);
          this.url = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          this.loadingPercentage = 0;
        }
      });
  }
}
