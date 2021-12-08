import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  selectedCategory: Category | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  // метод вызывается автоматически после инициализации компонента
  ngOnInit() {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }


  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }
}
