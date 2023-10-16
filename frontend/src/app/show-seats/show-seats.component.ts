import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-show-seats',
  templateUrl: './show-seats.component.html',
  styleUrls: ['./show-seats.component.css']
})
export class ShowSeatsComponent implements OnInit {
  asientosParte1: string[] = [];
  asientosParte2: string[] = [];
  asientosParte3: string[] = [];
  
  // Aquí es donde deberías recibir los datos proporcionados
  asientosDisponibles: any; // Supongo que este es el objeto que proporcionaste
  palco: any[] = []; // Arreglo de asientos palco
  general: any[] = []; // Arreglo de asientos general
  preferencial: any[] = []; // Arreglo de asientos preferencial

  constructor(private apiService: ApiService) {
    for (let i = 1; i <= 45; i++) {
      this.asientosParte1.push(`P${i}`);
    }

    for (let i = 1; i <= 100; i++) {
      this.asientosParte2.push(`G${i}`);
    }

    for (let i = 1; i <= 200; i++) {
      this.asientosParte3.push(`PR${i}`);
    }
  }

  ngOnInit(): void {
    // Aquí deberías hacer una llamada a tu API para obtener los datos
    this.apiService.ordenAsistentes().subscribe(data => {
      this.asientosDisponibles = data.asientosDisponibles;
      this.palco = data.palco;
      this.general = data.general;
      this.preferencial = data.preferencial;
    });
  }
}
