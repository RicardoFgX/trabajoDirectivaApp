import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre: String = '';
  apellido: String = '';
  cargo: string = '';
  entradas: any[];

  constructor() {
    this.entradas = [
      { titulo: 'Python, ejemplo de entrada 1' },
      { titulo: 'Java, ejemplo de entrada 2' },
      { titulo: 'JavaScript, ejemplo de entrada 3' },
      { titulo: 'SpringBoot, ejemplo de entrada 4' },
      { titulo: 'QSyo, ejemplo de entrada 5' },
    ];
  }

  registrarUsuario() {
    this.registrado = true;

    this.mensaje = 'Usuario registrado con exito ';
  }
}
