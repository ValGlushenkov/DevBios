import { Component, OnInit } from '@angular/core';
import {  Developer} from '../developer';
import { DeveloperService } from 'src/app/developer.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent implements OnInit {
  dev: Developer;
  constructor(private routes:ActivatedRoute, private devloperService:DeveloperService) { }

  getDeveloper():void{
    this.dev = this.devloperService.getDeveloperById(parseInt(this.routes.snapshot.paramMap.get('id')));
  }

  ngOnInit() {
    this.getDeveloper();
  }

}
