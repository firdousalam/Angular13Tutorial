import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostDataModel,LoadData,ReturnPost } from "../Interface/HttpInterface";



@Injectable({"providedIn" : 'root'})
export class HttpServices{

    public loadedPosts:LoadData[] = [];
    private url:string = "https://dummy.restapiexample.com/api/v1/create";
    postHttpData = {"name":"test","salary":"123","age":"23"}
    getEmployeeUrl = "https://api.publicapis.org/entries";
    public isfetching = true;
    postData : PostDataModel = {"name":"","salary":0,"age":0};

    constructor(private http: HttpClient){}

    createAndStoreData( name: string, salary: number, age: number ){
        this.postData  = {name :name,salary:salary,age:age}
        // post details
        return this.http.post(this.url,this.postHttpData)
        
    }
    fetchData(){
           return this.http.get<ReturnPost>(this.getEmployeeUrl)
    }
}