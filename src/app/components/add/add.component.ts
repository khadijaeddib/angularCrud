import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/Model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  person:Person =new Person();

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  addPerson(person:NgForm){
    this.person.id=person.value.id;
    this.person.name=person.value.name;
    this.person.birthdate=person.value.birthdate;

    this.personService.postPerson(this.person).subscribe(res=>(console.log("Ajout effectué")))
    person.reset();
  }
}
