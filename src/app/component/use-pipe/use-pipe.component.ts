import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper.service';
import { Student } from './student';
import { StudentService } from './students.service';

@Component({
  selector: 'app-use-pipe',
  templateUrl: './use-pipe.component.html',
  styleUrls: ['./use-pipe.component.scss'],
  providers: [StudentService]
})
export class UsePipeComponent implements OnInit {
  
  students: Student[];
  totalMarks: number;
  _filterText:string = '';
  filteredStudents: Student[];
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length);
    }, 2000);
  });

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(value);
  }

  constructor(private studentService: StudentService, public helperService: HelperService) { }

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this.students;
  }

  AddDummyStudent() {
    // let studentCopy = Object.assign([], this.students)
    // studentCopy.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
    // this.students = studentCopy;
    this.students.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  ChangeGender() {
    // let studentCopy = Object.assign([], this.students)
    // studentCopy[0].gender = 'Female';
    // this.students = studentCopy;
    this.students[0].gender = 'Female';
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  onMouseMove() {}

  filterStudentByGender(filterTerm: string){
    if (this.students.length === 0 || this.filterText === '') {
      return this.students;
    } else {
        return this.students.filter((student) => { 
            return student.gender.toLowerCase() === filterTerm.toLowerCase();
        })
    }
  }
}
