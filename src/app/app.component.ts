import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'newgraphapi';

  apiUrl='https://forecast9.p.rapidapi.com/rapidapi/forecast/46.95828/10.87152/hourly/'
  options={
    headers: {
    'X-RapidAPI-Key': 'd7fc22faa6mshb2a1bf588fcc570p183836jsn23f8a7b6dc3b',
    'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
  }
}
  apiData:any
  constructor(private http:HttpClient ){

  }

  ngOnInit(): void {
    this.http.get(this.apiUrl,this.options).subscribe(data=>{
      this.apiData=data
      console.log(data);
      
    })
  }

}
