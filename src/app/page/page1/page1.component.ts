import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  goto() {
    this.router.navigate(['/page/page2']);
  }

  back() {
    this.router.navigate(['/page'], {
      queryParams: {
        isPage: true
      },
    });
  }
}
