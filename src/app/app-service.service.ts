import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data: any) => {
        console.log(data);
    });
}

public getJSON(): Observable<any> {
    return this.http.get("./assets/sample_oem_data_response.json");
}
}
