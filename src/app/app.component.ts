import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Contactos', url: '/contactos', icon: 'people' },
    { title: 'Notas', url: '/favoritos', icon: 'book' },
    { title: 'Clases', url: '/clases', icon: 'newspaper' },
    { title: 'Location', url: '/location', icon: 'location' },
    { title: 'Configuración', url: '/configuracion', icon: 'settings' },
    { title: 'Acerca de', url: '/acerca', icon: 'information' },
  
  ];
  
  public labels = [
    { title: '829-697-6737', icon: 'logo-whatsapp'},
    { title: 'Jorge.Feliz@facebook', icon: 'logo-facebook'},
    { title: 'Jorge.Feliz@Instagram', icon: 'logo-instagram'}

];
  constructor() {}
}
