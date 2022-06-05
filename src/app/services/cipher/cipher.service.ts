import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CipherService {
  private URL_API: string = 'http://localhost:/5000/';
  private ENDPOINT_CIPHER_IMAGE = 'api/v1/cipher-image';
  private ENDPOINT_CIPHER_TEXT = 'api/v1/cipher-text';

  constructor(private http: HttpClient) {}

  cipherImage(image: any) {
    const contentType = 'image/*';
    const formData = new FormData();

    formData.append('image', image);

    return this.http
      .post(`${this.URL_API}${this.ENDPOINT_CIPHER_IMAGE}`, formData)
      .subscribe((result: any) => {
        const blob = new Blob([result], {
          type: contentType,
        });

        const file = new File([blob], 'FileName.png', {
          type: contentType,
        });

        saveAs(file);
      });
  }

  cipherText(text: string): Observable<any> {
    let req = {
      message: text,
    };

    return this.http.post(`${this.URL_API}${this.ENDPOINT_CIPHER_TEXT}`, req);
  }
}
