import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  books:Object;
  constructor(private dataService: DataService){
    this.dataService.getBooks().subscribe((res)=>{
      this.books = res['items'];
    })
  }

}
