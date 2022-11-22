import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-search',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persons:Person[]=[]

  person:Person =new Person();

  constructor(private personService:PersonService, private router:Router) { }

  ngOnInit(): void {}

  Search(){
    this.personService.getPersons().subscribe(person => {this.persons = person.filter(l => l.id == this.person.id)})
  }

  Edit(p:any){
    this.personService.updatePerson(this.person.id,p).subscribe((person) => {
      p = person;
    });
    this.toAll()
  }

  toAll(){
    this.router.navigate(['all'])
  }

}
