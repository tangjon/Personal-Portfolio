import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  link_github = environment.link_github;
  link_linkedIn = environment.link_github;

  constructor() {
  }

  ngOnInit() {
  }

}
