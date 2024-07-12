import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  taskArray = [{ taskName: 'Brush Teeth', isCompleted: false }];

  onSubmit(form: NgForm) {
    console.log(form);
    // pushing the form input into the task array
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
    });

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  // updating the status of the checkbox
  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
