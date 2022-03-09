import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage: Storage;
  constructor(private httpClient: HttpClient) {
    this.localStorage = window.localStorage;
  }



  setUsers(usersArray: any[], week: number) {
    return this.httpClient.post(`${environment.backendUrl}/post-users`, { usersArray: usersArray, week: week })
  }

  getUsers(): any {
    return this.httpClient.get(`${environment.backendUrl}/get-users`)
  }


  setDefaultState() {
    const usersArray = [
      new User("Ivan", "1"),
      new User("Dario", "2"),
      new User("Lovre", "3"),
      new User("Tino", "4")
    ]

    return this.httpClient.post(`${environment.backendUrl}/post-users`, { usersArray: usersArray })
  }


}




export class User {
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

export class Day {
  name: string
  availability: number

  constructor(name: string, availability: number) {
    this.name = name
    this.availability = availability
  }
}
