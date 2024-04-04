import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum incidunt non aspernatur quos autem sapiente eos accusantium iusto dolore? Adipisci odit doloremque corrupti reprehenderit deserunt dignissimos eos vel dicta odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum incidunt non aspernatur quos autem sapiente eos accusantium iusto dolore? Adipisci odit doloremque corrupti reprehenderit deserunt dignissimos eos vel dicta odio?';
  constructor() { }

  ngOnInit(): void {
  }

}
