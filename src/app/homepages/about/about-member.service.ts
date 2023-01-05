import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutMemberService {

  constructor() { }
  getMenmber(){
    return[
      {
        id:1,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqR_YKiNN8bFoKYQyDBq3O2i1Du93EYR5cg&usqp=CAU',
        name:'Johnny William',
        job:'CO-Founder',
        des:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.'
      },
      {
        id:2,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk67JgX909ogNlzrdJRXs8Mf2G9zS-4Plxzg&usqp=CAU',
        name:'Karry Pitcher',
        job:'Product Expert',
        des:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.'
      },
      {
        id:3,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3u6VyCupUCxYZuPIM82kifwmDDYCwVWBk-igAJSEu-ye3b7cjuTJytO6ghNQzDIB_F4&usqp=CAU',
        name:'Michael Soft',
        job:'Chief Marketing',
        des:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.'
      },
      {
        id:4,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANna3113Qg3aISZT4rDc5lrf5BBNsV10xpw&usqp=CAU',
        name:'Mary Cool',
        job:'Product Specialist',
        des:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.'
      },
      {
        id:5,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw73v4Kh12d6HzV88VakjeKzrl0KHHkf2sNQ&usqp=CAU',
        name:'George Walker',
        job:'Product Photographer',
        des:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.'
      },
      {
        id:6,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWs09jj9yU5nWvvFSjvTSSrKzEJlNLMhE7ew&usqp=CAU',
        name:'Kate Town',
        job:'General Manager',
        des:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.'
      }
    ]
  }
}
