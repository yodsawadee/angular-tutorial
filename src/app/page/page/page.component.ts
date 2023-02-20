import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  isPage = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isPage = params['isPage']? params['isPage']: this.isPage;
    });
  }

  goto() {
    this.isPage = false;
    this.router.navigate(['/page/page1'], {
      queryParams: {
        isPage: false
      },
    });
    this.router.navigate(['/page/page1']);
  }

}