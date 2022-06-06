import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CipherService {
  private URL_API: string = 'http://127.0.0.1:5000';
  private ENDPOINT_CIPHER_IMAGE = '/encrypt-image/';
  private ENDPOINT_CIPHER_TEXT = '/encrypt-text/';

  constructor(private http: HttpClient) {}

  cipherImage(image: any) {
    const contentType = 'image/png';
    const formData = new FormData();
		let file: File = image;
    formData.append('file', file);

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
				console.log(result)
      });
  }

  cipherText(text: string): Observable<any> {
    let req = {
      message: text,
    };

    return this.http.post(`${this.URL_API}${this.ENDPOINT_CIPHER_TEXT}`, req);
  }
}
