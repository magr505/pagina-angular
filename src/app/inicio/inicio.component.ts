import { Component, OnInit } from '@angular/core';
import { NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  // @ts-ignore
  /*noticianuevas: Array<any> = [
    { titulo: 'Primeras impresiones de Borderlands 3 Campos de pruebas',
      imagen: 'https://cnet1.cbsistatic.com/img/V1A2QThEyYjtfs_X7iTgHjQshEU=/1092x0/2019/05/14/' +
        'f207d0c2-268b-4a8e-9ef8-64d9abb201c9/borderlands-3.jpg',
      noticia: 'Impresiones de ' +
        'Borderlands 3 Proving Groungds, o Campo de pruebas, el modo que nos permitirá conseguir ' +
        'algunas de las mejores armas de Borderlands.'},
    { titulo: 'Fortnite: la actualización 10.20 llega el 27 de Agosto',
      imagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/30/15539803405944.jpg',
      noticia: 'La próxima ' +
        'actualización de Fortnite Battle Royale llega mañana 27 de Agosto. Esta update 10.20' +
        ' estará disponible a partir de las 10:00 hora española.'},
    { titulo: 'Dying Light 2 muestra un extenso gameplay de 20 minutos',
      imagen: 'https://areajugones.sport.es/wp-content/uploads/2018/07/dying-light-2-uhd-4k-wallpaper.jpg',
      noticia: 'Dying Light 2' +
        ' ha mostrado un extenso gameplay en el que hemos podido apreciar mucho de lo nuevo que' +
        ' traerá la próxima entrega de la franquicia.No os lo perdáis.'},
    { titulo: 'Death Stranding: se filtra un vídeo con material inédito',
      imagen: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Norman-Reedus-in-Death-Stranding.jpg',
      noticia: 'Death Stranding' +
        ' es uno de los juegos más esperados. Se ha filtrado un vídeo con material inédito del juego' +
        ' que muestra más de un detalle muy interesante'},
    { titulo: 'Rainbow Six Siege gratis entre el 28 de Agosto y el 3 de Septiembre',
      imagen: 'https://hb.imgix.net/2bb89fc35d0fe4ef6aa866c97ad3770493884db3.png?auto=compress,' +
        'format&fit=crop&h=353&w=616&s=b73095454e01ed081242cb05050bcead',
      noticia: 'Rainbow' +
        ' Six Siege estará disponible para jugar de manera gratuita entre el 28 de agosto y el 3 de ' +
        'septiembre. Además, se encuentra con un gran descuento.'},
    { titulo: 'Card Captor Sakura - se muestra la nueva edición deluxe del manga',
      imagen: 'https://www.gamerbraves.com/wp-content/uploads/2018/10/Cardcaptor-Sakura-Happiness-Memories-feature-image.jpg',
      noticia: 'Norma ' +
        'Editorial ha mostrado cómo será la nueva edición deluxe que se lanzará en España de Card Captor' +
        ' Sakura, uno de los mangas más populares de las CLAMP.'},
    { titulo: 'Monster Hunter World Iceborne: anunciadas las fechas de la nueva beta',
      imagen: 'https://http2.mlstatic.com/monster-hunter-world-espanol-pc-digital-entrega-inmediata-D_NQ_NP_' +
        '959895-MLA28910021025_122018-F.jpg',
      noticia: 'Monster' +
        ' Hunter World Iceborne, la nueva expansión, llega dentro de muy poco. Se podrá probar antes el ' +
        'juego en una beta cuyas fechas ya han sido anunciadas.'}
    ];
*/
  resenas: Array<any> = [
    { fig: 'assets/astral.jpg', ver: 'ver mas'},
    { fig: 'assets/contra.jpg', ver: 'ver mas'},
    { fig: 'assets/fire.jpg', ver: 'ver mas'},
    { fig: 'assets/super_mario_maker.jpg', ver: 'ver mas'},
    { fig: 'assets/dk.jpg', ver: 'ver mas'},
    { fig: 'assets/zelda.jpg', ver: 'ver mas'},
    { fig: 'assets/new.jpg', ver: 'ver mas'},
    { fig: 'assets/Yoshi.jpg', ver: 'ver mas'},
    { fig: 'assets/MarySkelter2.jpg', ver: 'ver mas'},
    { fig: 'assets/Wolfenstein.jpg', ver: 'ver mas'},
    { fig: 'assets/witcher.jpg', ver: 'ver mas'},
    { fig: 'assets/panzer.jpg', ver: 'ver mas'}
  ];

  menulateral: Array<any> = [
    { enlace: 'Zona juegos Playstation', logo: 'fas fa-gamepad size:7x', color: 'red'},
    { enlace: 'Zona juegos Nintendo', logo: 'fas fa-gamepad size:7x'},
    { enlace: 'Zona juegos Xbox', logo: 'fas fa-gamepad size:7x'},
    { enlace: 'Zona juegos Otros', logo: 'fas fa-gamepad size:7x'},
    { enlace: 'Zona Noticias', logo: 'far fa-newspaper'},
    { link: '/zona-reseñas', enlace: 'Zona Reseñas', logo: 'fas fa-users'},
    { enlace: 'Zona videos', logo: 'fas fa-video'}
  ];
  noticianueva: any[] = [];
  constructor(private noticia: NoticiasService) {
    this.noticianueva = noticia.obtenerNoticias();
  }
  ngOnInit() {
  }

}
