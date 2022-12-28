import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnPost,LoadData } from  "./Interface/HttpInterface";
import {HttpServices} from "./services/http.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public loadedPosts:(LoadData[]) = [];
  isfetching = true;
   

  constructor(private http: HttpClient,private httpServices: HttpServices) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { name: string; salary: number; age: number }) {
    
    this.httpServices.createAndStoreData(postData.name,postData.salary,postData.age)
    .subscribe(responseData=>{
      console.log(responseData);
     
  
    })
   
  }

  onFetchPosts() {
   this.httpServices.fetchData().subscribe(getData=>{
        console.log(getData);
        this.loadedPosts = getData.entries;
        this.isfetching = false;
        this.loadedPosts;
    })
  }

  onClearPosts() {
    // Send Http request
   

  }
}
