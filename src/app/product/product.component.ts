import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any[] = [
    { name: 'Model A', desc: 'This is the smallest of the three pianos measuring six feet two inches long.', imagepath: 'assets/images/model-a.jpg' },
    { name: 'Model B', desc: 'This is the next size up, sizing in at six foot eleven.', imagepath: 'assets/images/model-b.jpg' },
    { name: 'Model D', desc: 'This is the Concert Model, coming in at a massive eight feet and eleven inches to deliver a stunning sound in even the largest of venues.',
      imagepath: 'assets/images/model-d.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
