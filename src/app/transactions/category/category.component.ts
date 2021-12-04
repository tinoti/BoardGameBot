import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../transactions.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: TransactionsService) { }

  category: any
  postCategory() {
    this.service.postCategory(this.category);
  }

  ngOnInit(): void {
  }

}
