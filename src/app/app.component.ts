import { Component, OnInit } from '@angular/core';
import { LocalStorageService, User } from './app.service';
import * as dayjs from 'dayjs'

import * as weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {

  constructor(private service: LocalStorageService) { }
  title = 'front'
  isDisabled = false

  usersArray: User[] = [];
  date: any
  selectedDate: any
  currentWeek: any
  week: any

  ngOnInit() {
    this.date = dayjs()
    this.currentWeek = dayjs().week()
    this.service.getUsers().subscribe((data: any) => {
      console.log(data)
      if (data == null) {
        this.usersArray = []
      } else {
        this.usersArray = data.usersArray
        this.week = data.week
      }
    })
  }


  setAvailability(name: any, nameDay: any, availability: number) {


    availability++
    if (availability === 4) availability = 0
    const user = this.usersArray.filter(o => o.name === name)
    const day = user[0].days.filter(o => o.name === nameDay)
    day[0].availability = availability

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
    let selectedWeek = 0
    if(this.selectedDate){
      selectedWeek = dayjs(this.selectedDate).week()
    }
    else{
      selectedWeek = this.week
    }
    this.isDisabled = true
    this.service.setUsers(this.usersArray, selectedWeek).subscribe((data: any) => {
      console.log("SPREMLJENO")
      this.isDisabled = false
      this.week = selectedWeek
    })
  }

  setButtonColor(availability: any) {

    switch (Number(availability)) {
      case 1:
        return "button-color-green"
        break;
      case 2:
        return "button-color-red"
        break
      case 3:
        return "button-color-yellow"
        break
      default:
        return "button-color-default"
        break;
    }
  }
}


