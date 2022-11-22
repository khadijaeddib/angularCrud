import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../Model/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url ="http://localhost:3000/persons";

  constructor(private http:HttpClient ) { }

  public getPersons() {
    return this.http.get<Person[]>(this.url)
  }

  postPerson(person:any){
    return this.http.post<Person>(this.url,person)
  }

  deletePerson(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  updatePerson(id:any,person:any){
    return this.http.put(`${this.url}/${id}`,person)
  }


}
