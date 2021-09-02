import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Exercise } from '../model/exercise';
import { DATA } from 'src/data';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {

  @Input()
  exercise!: Exercise;

  exercises = DATA;

  public exerciseId: any;

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.exerciseId = id;
    });
  }

  goPrevious() {
    let previousId = this.exerciseId - 1;
    this.router.navigate(['/exercises', previousId])
  }

  goNext() {
    let nextId = +this.exerciseId + 1;
    this.router.navigate(['/exercises', nextId])
  }

  goToExercises() {
    let selectedId = this.exerciseId ? this.exerciseId : null;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  notFirst(): boolean {
    if(this.exerciseId > 1) {
      return true;
    }
    else {
      return false;
    }
  }

  notLast(): boolean {
    if(this.exercises.length > this.exerciseId) {
      return true;
    }
    else {
      return false;
    }
  }
}
