import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: 'Chapter 1 | The Last Day of 2019',
      url: '/chapter1'
    },
    {
      title: 'Chapter 2 | Joshua Tree',
      url: '/chapter2'
    },
    {
      title: 'Chapter 3 | Fire on The Beach',
      url: '/chapter3'
    },
    {
      title: 'Chapter 4 | Bikes on The Coast',
      url: '/chapter4'
    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
