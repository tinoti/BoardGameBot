import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AppComponent implements OnInit {
  title = 'front';

  value = 0

  usersArray = [
    new User("Ivan", "1"),
    new User("Dario", "2"),
    new User("Lovre", "3"),
     new User("Tino", "4")
  ]


  ngOnInit() {

  }



  changeValue(value: any) {
    this.value = value.value
  }

  setAvailability(name: any, nameDay: any) {

    const user = this.usersArray.filter(o => o.name === name)
    const day = user[0].days.filter(o => o.name === nameDay)
    day[0].availability = this.value

  }

  setButtonColor(availability: any){

    switch (Number(availability)) {
      case 1:
        return "button-color-green"
        break;
      case 2:
        return "button-color-red"
      case 3:
        return "button-color-yellow"
      default:
        return "button-color-default"
        break;
    }
  }
}


class User {
  name: string
  id: string
  days: Day[] = [
    new Day("Ponedjeljak", 0),
    new Day("Utorak", 0),
    new Day("Srijeda", 0),
    new Day("Četvrtak", 0),
    new Day("Petak", 0),
    new Day("Subota", 0),
    new Day("Nedjelja", 0)
  ]

  constructor(name: string, id: string) {
    this.name = name
    this.id = id
  }
}

class Day {
  name: string
  availability: number

  constructor(name: string, availability: number) {
    this.name = name
    this.availability = availability
  }
}
