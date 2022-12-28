export interface ReturnPost {
    "count" : number
    "entries" : []
  }
  export interface LoadData {
    "API" : string,
    "Description" : string,
    "Link" : string,
    "Auth": string,
    "HTTPS": boolean,
    "Cors": string,
    "Category": string

  }
  export interface PostDataModel{
    name?: string,
    salary?: number, 
    age?: number
  }