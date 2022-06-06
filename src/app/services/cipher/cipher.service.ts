import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  cipherImage(image: File) {
    const contentType = 'image/png';
    const formData = new FormData();

    formData.append('file', image);

    return this.http
      .post(`${this.URL_API}${this.ENDPOINT_CIPHER_IMAGE}`, formData, { responseType: 'blob' })
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
