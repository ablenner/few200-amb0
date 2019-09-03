import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from './models';
import { ListDataService } from './services/list-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList$: Observable<TodoListItem[]>;

  constructor(private service: ListDataService) { } // could also be public or protected

  ngOnInit() {
    this.todoList$ = this.service.getData();
  }

  addTodoItem(what: string) {
    this.service.add(what);
  }
}
