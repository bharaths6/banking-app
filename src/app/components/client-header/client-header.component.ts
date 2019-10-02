import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss'],
})
export class ClientHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() age: string;

  constructor() { }

  ngOnInit() {}

}
