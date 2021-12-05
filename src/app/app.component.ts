import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { LocalStorageService, User } from './app.service';

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

  constructor(private service: LocalStorageService) { }
  title = 'front'
  isDisabled = false
  value = 0

  usersArray: User[] = [];


  ngOnInit() {
    this.service.getUsers().subscribe((data: any) => {

      if (data == null) {
        this.usersArray = []
      } else {
        this.usersArray = data
      }
    })
  }



  changeValue(value: any) {
    this.value = value.value
  }

  setAvailability(name: any, nameDay: any) {

    const user = this.usersArray.filter(o => o.name === name)
    const day = user[0].days.filter(o => o.name === nameDay)
    day[0].availability = this.value

    console.log(this.usersArray)
  }

  setDefaultState() {
    this.isDisabled = true
    this.service.setDefaultState().subscribe((data: any) => {
      this.usersArray = data
      this.isDisabled = false
    })
  }

  save() {
    this.isDisabled = true
    this.service.setUsers(this.usersArray).subscribe((data: any) => {
      console.log("SPREMLJENO")
      this.isDisabled = false
    })
  }

  setButtonColor(availability: any) {

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
