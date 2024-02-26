import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute) {
    // la paramMap est une map ou la clé correspond au nom écris après les : de notre url et la valeur est celle qui la remplace, Ex: route: /other/:id, url: /other/5 => paramMap = {{ id:5 }}
    console.log(this.route.snapshot.paramMap);
    // pareil qu'au dessus mais pour les queryParam
    console.log(this.route.snapshot.queryParamMap);
  }
}
