import { AboutMemberService } from './about-member.service';
import { Members } from './../../types/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  members:Members[]=[]
  constructor(private MemberService: AboutMemberService){}
  ngOnInit(): void {
    this.members =this.MemberService.getMenmber()
  } 
}
