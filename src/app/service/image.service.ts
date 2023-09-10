import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "../model/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl: string = `http://$host:8080`;

  constructor(private http: HttpClient) {
  }

  getImagesByKey(key: string): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl + '/images/' + key);
  }

  uploadImage(body: any): Observable<void> {
    return this.http.post<void>(this.apiUrl + '/images', body);
  }
}
