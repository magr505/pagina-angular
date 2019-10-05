import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  noticianuevas: any = [
    { titulo: 'Primeras impresiones de Borderlands 3 Campos de pruebas',
      imagen: 'https://cnet1.cbsistatic.com/img/V1A2QThEyYjtfs_X7iTgHjQshEU=/1092x0/2019/05/14/' +
        'f207d0c2-268b-4a8e-9ef8-64d9abb201c9/borderlands-3.jpg',
      noticia_corta: 'Impresiones de ' +
        'Borderlands 3 Proving Groungds, o Campo de pruebas, el modo que nos permitirá conseguir ' +
        'algunas de las mejores armas de Borderlands.',
      noticia: 'Estas son nuestras impresiones de Campo de Pruebas, el modo de Borderlands 3 en el ' +
        'que conseguiremos el mejor botín... si superamos unas oleadas de enemigos y completamos todos los desafíos.\n' +
        '\n' +
        'Faltan solo unos días para que se ponga a la venta Borderlands 3 y sus responsables han admitido' +
        ' que han mostrado el juego más de lo debido estos últimos meses. Ya hemos estado en dos eventos de' +
        ' preview y os hemos trasladado nuestras primeras impresiones de Borderlands 3, pero en Gamescom pudimos' +
        ' jugar a un modo que no se había mostrado hasta ahora.\n' +
        '\n' +
        'Se trata de Proving Grounds, o Campo de Pruebas, un modo en el que los mercenarios cazadores de la ' +
        'cámara debemos demostrar nuestra valía al luchar en un modo horda contra enemigos de nivel muy avanzado.\n' +
        '\n' +
        '\n' +
        'Y es que, no es un modo que esté disponible desde el comienzo del juego. Tendremos que llegar a un ' +
        'punto muy avanzado de la campaña y llegar a un punto concreto del mapa para poder desbloquear el modo' +
        ' Campo de Pruebas y, así, recoger la recompensa.\n' +
        '\n' +
        'Es un modo duro, pero que vale la pena tanto por la recompensa (básicamente, para eso lo han introducido,' +
        ' para conseguir las armas más poderosas del juego) y porque es realmente dinámico. \n' +
        '\n' +
        'Proving Grounds: hordas, dónde habéis estado toda mi vida\n' +
        'Aunque se trata de un modo horda, no es una horda habitual. Cuando nos presentamos en Campo de Pruebas, ' +
        'una entidad misteriosa nos da la bienvenida y una palmadita en la espalda, ya que es el momento de entrar' +
        ' en el campo de batalla sin saber, realmente, lo que nos vamos a encontrar.\n' +
        '\n' +
        'Los enemigos de las diferentes rondas de cada partida son aleatorios, y no empiezan como en otros juegos de ' +
        'horda por los enemigos más asequibles, subiendo de nivel hasta que nos encontramos al jefazo.\n' +
        '\n' +
        'Este HP Envy es uno de los mejores monitores 4K por menos de 450 euros\n' +
        '\n' +
        'Aquí empezamos con hormigarañas de diferentes clases y poder elemental, pero también empezaron pronto a ' +
        'aparecer enemigos mucho más duros y variantes hormigarañas ‘’cabronazas’’ que son capaces de poner las cosas' +
        ' difíciles.\n' +
        '\n' +
        'Son varias salas las que debemos limpiar y, además, tenemos un tiempo límite de 30 minutos. Cuando empezamos' +
        ' a jugar, nos asustaron un poco con la dificultad, pero realmente no es algo que deba asustar a quien ha ' +
        'jugado algún Borderlands anterior.\n' +
        '\n' +
        'Los enemigos están en un nivel avanzado, pero nos soltaron en el modo con un personaje de nivel 30 y con armas' +
        ' bastante ‘’chetadas’’, un reflejo de cómo estará nuestro personaje cuando podamos desbloquear este modo.\n' +
        '\n' +
        '\n' +
        'Y, la verdad, no se dio nada mal. Eso sí, no hay que descuidarse, ya que en este nivel hay que poner en ' +
        'práctica todo lo aprendido en Borderlands 3. Es decir, ya sabéis que los botiquines no son manuales, sino ' +
        'que se trata de viales que están en el suelo (o en cofres) y que nos recargan la vida al instante.\n' +
        '\n' +
        'También debemos jugar con los diferentes modos de disparo de las armas y, a su vez, probar contra qué enemigos ' +
        'son mejores los diferentes modos de disparo, las propias armas y el poder elemental de las mismas.\n' +
        '\n' +
        'En Borderlands 3, muchas armas tienen varios modos de disparo. En un rifle automático esto puede significar' +
        ' que contamos con un modo automático y uno semiautomático, pero también puede ser que cierta arma dispare ' +
        'elemental de hielo y elemental corrosivo dependiendo del modo.\n' +
        '\n' +
        'Avance de Borderlands 3\n' +
        'Y, de igual manera, debemos estar muy atentos a los elementales enemigos, ya que pueden prendernos fuego o ' +
        'cubrirnos de ácido, y como los enemigos aparecen sin parar, y en todos los puntos del escenario (que no es ' +
        'muy grande), hay que tener mil ojos.\n' +
        '\n' +
        'Moverse sin parar a la vez que disparamos es una buenísima estrategia para jugar a Borderlands, pero en este ' +
        'modo tiene aún más importancia debido a la casuística del mismo.\n' +
        '\n' +
        'Otra particularidad del modo es que hay un objetivo claro: llegar al final antes de 30 minutos. Allí nos ' +
        'espera un enemigo de alto rango y un cofre con una suculenta recompensa. Esta recompensa puede variar ' +
        'dependiendo de varios factores.\n' +
        '\n' +
        'Si no morimos, será mayor, y si tardamos poco (en las dos partidas que pude disputar me sobraron unos 10 ' +
        'minutos sin problema), la recompensa también aumentará. Además, tenemos una serie de objetivos adicionales, ' +
        'como cargarnos X enemigos de cierta forma, completar salas dentro de un tiempo determinado y otra serie de ' +
        'objetivos que se marcan al principio de la partida.\n' +
        '\n' +
        'Avance de Borderlands 3\n' +
        'Como es un modo que adicional y no obligatorio, si morimos no debemos preocuparnos. Recibiremos una ' +
        'recompensa menor… y ya está. Y esto es muy interesante debido a que, de esta forma, podemos utilizar sin ' +
        'frustrarnos este modo para su principal cometido: conseguir botín.\n' +
        '\n' +
        'Es un modo, según nos explicaron, para subir de nivel y conseguir armas más grandes y poderosas, y por eso ' +
        'debemos ir a por todas para intentar hacernos con el material más peligroso del juego. Peligroso para quien ' +
        'se ponga por delante, claro.\n' +
        '\n' +
        'Experiencia que cambia sobremanera dependiendo del árbol de habilidades y el personaje elegido\n' +
        '‘’Gasta todos los puntos antes de empezar, que si no es chunguísimo’’. Es un modo que, como digo, si no eres' +
        ' muy ducho en shooters se puede hacer algo cuesta arriba, peor en solitario no ofrece demasiados problemas si ' +
        'ya conoces Borderlands. Ahora bien, no sabemos si cuando juguemos en cooperativo a 4 jugadores cambiará la cosa.\n' +
        '\n' +
        'Avance de Borderlands 3\n' +
        'Lo que sí cambia es la manera de abordar el desafío dependiendo del personaje elegido. Y es que, en las dos ' +
        'partidas conté con personajes muy diferentes. Por un lado, la sirena, mi clase favorita de la saga. Invirtiendo' +
        ' los puntos de nivel de forma sabia y utilizando cada recurso de la clase, no diré que el modo fuera un paseo,' +
        ' pero pude estar a la ofensiva todo el rato.\n' +
        '\n' +
        'Con el personaje tanque, la cosa cambia, ya que hay veces que debemos buscar un sitio alejado para lanzar ' +
        'desde ahí nuestro arsenal y esperar el mejor momento para sembrar el caos, juntando a varios enemigos para ' +
        'acabar con cuantos más a la vez, mejor.\n' +
        '\n' +
        'Como ya he comentado, no es un modo que esté disponible desde el comienzo del juego, por lo que, al llegar al' +
        ' mismo, tendremos puntos de habilidad más que de sobra para afrontar el desafío y recoger el botín de alto rango.\n' +
        '\n' +
        'Avance de Borderlands 3\n' +
        'Un juego hecho de cero para la actual generación\n' +
        'Algo que no me gusta hacer demasiado en unas primeras impresiones, a no ser que sea demasiado evidente que' +
        ' el músculo está ahí, es comentar el apartado visual del juego. El motivo es que ya tendremos tiempo de sobra' +
        ' en el análisis para realizar cualquier valoración de este apartado.\n' +
        '\n' +
        'Sin embargo, cuando te pones a los mandos de Borderlands 3 por primera vez, te das cuenta de que, por fin,' +
        ' se trata de un juego hecho desde cero para la actual generación de consolas y PC.\n' +
        '\n' +
        'Borderlands 3\n' +
        'El apartado artístico de Borderlands sigue siendo una delicia, pero la alta resolución y otros efectos, ' +
        'como mejores texturas y una iluminación de mayor calidad, es algo evidente en cuanto comienza la aventura.' +
        ' No es que sea el juego de actual generación que mejor se vea, pero sí es de lo más vistoso.\n' +
        '\n' +
        'Además, en nuestra prueba, no sufrimos ningún tipo de bug o caída de frames por segundo, por lo que disfrutamos' +
        ' de una experiencia de lo más sólida.\n' +
        '\n' +
        'Borderlands 3\n' +
        'Solo quedan unos días hasta que, el próximo 13 de septiembre, se ponga a la venta Bordelands 3, y por las ' +
        'primeras impresiones del juego que hemos tenido hasta ahora, y la prueba de Campo de Pruebas, valga la redundancia,' +
        ' podemos decir que la esencia Borderlands se mantiene intacta. Septiembre empieza fuerte, y ya os podéis preparar ' +
        'para un último periodo de 2019 cargado de grandes lanzamientos.'
    },
    { titulo: 'Fortnite: la actualización 10.20 llega el 27 de Agosto',
      imagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/30/15539803405944.jpg',
      noticia_corta: 'La próxima ' +
        'actualización de Fortnite Battle Royale llega mañana 27 de Agosto. Esta update 10.20' +
        ' estará disponible a partir de las 10:00 hora española.'},
    { titulo: 'Dying Light 2 muestra un extenso gameplay de 20 minutos',
      imagen: 'https://areajugones.sport.es/wp-content/uploads/2018/07/dying-light-2-uhd-4k-wallpaper.jpg',
      notici_corta: 'Dying Light 2' +
        ' ha mostrado un extenso gameplay en el que hemos podido apreciar mucho de lo nuevo que' +
        ' traerá la próxima entrega de la franquicia.No os lo perdáis.'},
    { titulo: 'Death Stranding: se filtra un vídeo con material inédito',
      imagen: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Norman-Reedus-in-Death-Stranding.jpg',
      noticia_corta: 'Death Stranding' +
        ' es uno de los juegos más esperados. Se ha filtrado un vídeo con material inédito del juego' +
        ' que muestra más de un detalle muy interesante'},
    { titulo: 'Rainbow Six Siege gratis entre el 28 de Agosto y el 3 de Septiembre',
      imagen: 'https://hb.imgix.net/2bb89fc35d0fe4ef6aa866c97ad3770493884db3.png?auto=compress,' +
        'format&fit=crop&h=353&w=616&s=b73095454e01ed081242cb05050bcead',
      noticia_corta: 'Rainbow' +
        ' Six Siege estará disponible para jugar de manera gratuita entre el 28 de agosto y el 3 de ' +
        'septiembre. Además, se encuentra con un gran descuento.'},
    { titulo: 'Card Captor Sakura - se muestra la nueva edición deluxe del manga',
      imagen: 'https://www.gamerbraves.com/wp-content/uploads/2018/10/Cardcaptor-Sakura-Happiness-Memories-feature-image.jpg',
      noticia_corta: 'Norma ' +
        'Editorial ha mostrado cómo será la nueva edición deluxe que se lanzará en España de Card Captor' +
        ' Sakura, uno de los mangas más populares de las CLAMP.'},
    { titulo: 'Monster Hunter World Iceborne: anunciadas las fechas de la nueva beta',
      imagen: 'https://http2.mlstatic.com/monster-hunter-world-espanol-pc-digital-entrega-inmediata-D_NQ_NP_' +
        '959895-MLA28910021025_122018-F.jpg',
      noticia_corta: 'Monster' +
        ' Hunter World Iceborne, la nueva expansión, llega dentro de muy poco. Se podrá probar antes el ' +
        'juego en una beta cuyas fechas ya han sido anunciadas.'}
  ];

  constructor() {
    console.log('funcionando el servicio');
  }

  obtenerNoticias() {
    return this.noticianuevas;
  }
  obtenerUno(i) {
    return this.noticianuevas[i];
  }
}
