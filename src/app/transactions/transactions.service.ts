import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  postCategory(name: any) {
    console.log("TESTTEST")
    this.httpClient.post(`${environment.backendUrl}/category`, name)
  }
}
