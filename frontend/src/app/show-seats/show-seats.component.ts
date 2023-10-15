import { Component } from '@angular/core';
import { OrdenarAsistentesService } from '../services/ordenar-asistentes.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-show-seats',
  templateUrl: './show-seats.component.html',
  styleUrls: ['./show-seats.component.css']
})
export class ShowSeatsComponent {
  constructor(private ordenarAsistentesService: ApiService) { }

}
