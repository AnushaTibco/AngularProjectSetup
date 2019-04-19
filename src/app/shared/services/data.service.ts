import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=flowers')
  }
}  
