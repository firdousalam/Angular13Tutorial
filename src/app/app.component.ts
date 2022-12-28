import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnPost,LoadData } from  "./Interface/HttpInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public loadedPosts:LoadData[] = [];
  private url:string = "https://dummy.restapiexample.com/api/v1/create";
  postHttpData = {"name":"test","salary":"123","age":"23"}
  getEmployeeUrl = "https://api.publicapis.org/entries";
  isfetching = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { name: string; salary: number; age: number }) {
    
    // Send Http request
   
   
    this.http.post(this.url,this.postHttpData)
    .subscribe(responseData=>{
     
     
    })
  }

  onFetchPosts() {
    // Send Http request
    this.http.get<ReturnPost>(this.getEmployeeUrl).subscribe(getData=>{
      console.log(getData);
      this.loadedPosts = getData.entries;
      this.isfetching = false;
    })
   
  }

  onClearPosts() {
    // Send Http request
  }
}
