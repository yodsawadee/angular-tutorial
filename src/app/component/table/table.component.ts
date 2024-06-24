import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpService, IStory, StoryReq } from 'src/app/service/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'title', 'body', 'author', 'img'];
  dataSource = new MatTableDataSource<IStory>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  apiResponse: any;
  tableOption = {
    pageNumber: 0,
    pageSize: 5,
    sortDirection: 'ASC',
    sortProperties: ['id'],
  };
  id: number;
  title: string;
  body: string;
  author: string;

  isEmptyList = true;
  displaySearchResultTxt = false;
  form: FormGroup;

  constructor(private httpService: HttpService, private fb: FormBuilder) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      author: new FormControl(''),
    });
    this.getData({ id: 0, title: '', body: '', author: '', tableOption: this.tableOption });
    this.form.controls['author'].valueChanges.subscribe(value => {
      // if (value) {
      //   console.log('value=',value)
      // }
      this.author = this.form.controls['author'].getRawValue();
    });
  }

  submit() {
    this.getData({ id: 0, title: '', body: '', author: this.author, tableOption: this.tableOption });
  }

  getData(req:StoryReq) {
    this.apiResponse = this.httpService.getStory(req).subscribe((it) => {
      this.apiResponse = it;
      console.log('apiResponse',this.apiResponse)
      if (this.apiResponse?.content?.length > 0) {
        this.dataSource = new MatTableDataSource<any>(this.apiResponse.content);
        this.isEmptyList = false;
        this.displaySearchResultTxt = false;
      } else {
        this.isEmptyList = true;
        this.displaySearchResultTxt = true;
      }
    });
  }

  changePaging(pageObj: PageEvent) {
    if (pageObj) {
      this.tableOption.pageNumber = pageObj.pageIndex;
      this.tableOption.pageSize = pageObj.pageSize;
      this.getData({ id: 0, title: '', body: '', author: this.author, tableOption: this.tableOption });
    }
  }

  onSorting(sortState: Sort) {
    console.log('sortState',sortState)
    this.tableOption.sortDirection = this.tableOption.sortDirection === 'DESC' ? 'ASC' : 'DESC';
    this.tableOption.sortProperties = [sortState.active];
    this.getData({ id: 0, title: '', body: '', author: this.author, tableOption: this.tableOption });
  }
}
