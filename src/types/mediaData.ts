export type Card = {
  id: number;
  title: string;
  category: string;
  duration: string;
  src: string;
  description: string;
  videoUrl: string;
};

export type MediaList = {
  listTitle: string;
  listDescription: string;
  cards: Card[];
};

export type MediaResponse = {
  recentList: MediaList;
  mostPopularList: MediaList;
  classicalList: MediaList;
  popularShows: MediaList;
};

export const response: MediaResponse = {
    recentList:{
    listTitle: 'Lo más reciente',
    listDescription: 'Lo recién subido a la plataforma.',
    cards:[
      {
        id: 1,
        title: 'Amigo Taladro',
        category: 'Comedia',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2015/09/03/20/05/construction-workers-921224_1280.jpg',
        description: 'Un grupo de obreros convierte un día de trabajo en la obra en la comedia más absurda del año.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: 2,
        title: 'Tras la ventana',
        category: 'Terror',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2019/10/09/13/10/halloween-4537430_960_720.jpg',
        description: 'Una joven descubre oscuros secretos al observar a su vecino a través de la ventana.',
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      {
        id: 3,
        title: 'Tácticos',
        category: 'Acción',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2016/06/09/23/45/soldier-1447008_1280.jpg',
        description: 'Un equipo de élite se enfrenta a una misión imposible en medio de traiciones y explosiones.',
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      {
        id: 4,
        title: 'Mike y Cath',
        category: 'Aventura',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2025/01/08/05/13/dark-9318211_1280.png',
        description: 'Dos amigos inseparables emprenden un viaje que cambiará sus vidas para siempre.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/water_netflix_15000kbps_1080p_59.94fps_h264.mp4",
      },
      {
        id: 5,
        title: 'Perrunos',
        category: 'Comedia',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2016/02/09/17/43/dogs-1190015_1280.jpg',
        description: 'Una pandilla de perros parlantes desata carcajadas en cada rincón de la ciudad.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/water_netflix_15000kbps_1080p_59.94fps_h264.mp4",
      },
      {
        id: 6,
        title: 'La Ciudad Gris',
        category: 'Drama',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2017/06/22/10/08/column-2430240_960_720.jpg',
        description: 'Un hombre solitario camina por las calles grises buscando un sentido a su existencia.',
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      {
        id: 7,
        title: 'Dexter',
        category: 'Thriller',
        duration: '2:05',
        src: 'https://cdn.pixabay.com/photo/2017/07/17/23/14/horror-2514218_1280.jpg',
        description: 'Un asesino meticuloso se enfrenta a su lado más oscuro en esta película llena de suspenso.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/cutting_orange_tuil_8s_10244kbps_1080p_59.94fps_h264.mp4",
      },
    ],
  },
  mostPopularList:{
    listTitle: 'Lo más popular',
    listDescription: 'Lo más visto por los usuarios.',
    cards:[
      {
        id: 1,
        title: 'Amigo Taladro',
        category: 'Comedia',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2015/09/03/20/05/construction-workers-921224_1280.jpg',
        description: 'Un grupo de obreros convierte un día de trabajo en la obra en la comedia más absurda del año.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: 8,
        title: 'Comedy Gold',
        category: 'Comedia',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2021/02/27/13/42/comedy-6054626_1280.jpg',
        description: 'Un comediante fracasado intenta su último gran espectáculo lleno de situaciones insólitas.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: 9,
        title: 'Esperanza fría',
        category: 'Acción',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2025/03/29/09/32/ai-generated-9500630_1280.jpg',
        description: 'Un grupo de soldados perdidos en el hielo luchan por sobrevivir en un mundo helado.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      },
      {
        id: 10,
        title: 'Viaje Espacial',
        category: 'Ciencia Ficción',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2014/09/11/12/45/spacecraft-441708_1280.jpg',
        description: 'Exploradores interplanetarios descubren un secreto que cambiará la historia humana.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      },
      {
        id: 11,
        title: 'El Viaje de Jane',
        category: 'Aventura',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2019/05/31/09/16/surreal-4241789_1280.jpg',
        description: 'Una joven valiente atraviesa tierras misteriosas en busca de su destino.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      },
      {
        id: 12,
        title: 'África Salvaje',
        category: 'Documental',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2017/09/25/17/02/africa-2785836_1280.jpg',
        description: 'Un viaje visual a las maravillas de la fauna africana en su estado más salvaje.',
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      {
        id: 13,
        title: 'John Payne',
        category: 'Noir',
        duration: '2:05',
        src: 'https://cdn.pixabay.com/photo/2024/01/28/02/28/man-8537038_1280.png',
        description: 'Un detective cínico y su último caso en una ciudad donde nadie es inocente.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/Dancers_8s_10244kbps_1080p_60.0fps_h264.mp4"
      },
    ],
  },
  classicalList:{
    listTitle: 'Clásicos',
    listDescription: 'Películas y Series Clásicas',
    cards:[
      {
        id: 14,
        title: 'Sueño de Vuelo',
        category: 'Drama',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2016/01/05/16/14/hdr-1122860_1280.jpg',
        description: 'Una mujer lucha por alcanzar sus sueños en un mundo que intenta frenarla.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/Dancers_8s_10244kbps_1080p_60.0fps_h264.mp4",
      },
      {
        id: 10,
        title: 'Viaje Especial',
        category: 'Ciencia Ficción',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2014/09/11/12/45/spacecraft-441708_1280.jpg',
        description: 'Exploradores interplanetarios descubren un secreto que cambiará la historia humana.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      },
      {
        id: 15,
        title: 'Angela Noir',
        category: 'Noir',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2024/01/28/01/49/woman-8537024_960_720.png',
        description: 'Una femme fatale escapa de su oscuro pasado en una ciudad donde todo tiene precio.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      },
      {
        id: 16,
        title: 'El Bosque',
        category: 'Terror',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2020/04/23/00/43/chernobyl-5080601_1280.jpg',
        description: 'Un bosque maldito pondrá a prueba los límites de la cordura de quienes lo cruzan.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/cutting_orange_tuil_8s_10244kbps_1080p_59.94fps_h264.mp4",
      },
      {
        id: 17,
        title: 'Fistful of Frags',
        category: 'Western',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2024/02/29/18/58/ai-generated-8605032_960_720.jpg',
        description: 'Un forajido solitario busca redención en el salvaje oeste.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/Dancers_8s_10244kbps_1080p_60.0fps_h264.mp4",
      },
      {
        id: 18,
        title: 'Paz',
        category: 'Bélico',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2020/01/13/01/58/was-4761474_1280.jpg',
        description: 'En medio de la guerra, un soldado sueña con un mundo sin violencia.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      },
      {
        id: 19,
        title: 'Dexter',
        category: 'Thriller',
        duration: '2:05',
        src: 'https://cdn.pixabay.com/photo/2017/07/17/23/14/horror-2514218_1280.jpg',
        description: 'Un asesino meticuloso se enfrenta a su lado más oscuro en esta película llena de suspenso.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/cutting_orange_tuil_8s_10244kbps_1080p_59.94fps_h264.mp4",
      },
    ],
  },
  popularShows:{
    listTitle: 'Series Populares',
    listDescription: 'Las series más vistas por los usuarios.',
    cards:[
      {
        id: 20,
        title: 'Mi Abuelo y Yo',
        category: 'Comedia',
        duration: '3 Temporadas',
        src: 'https://media.istockphoto.com/id/2161726514/photo/i-am-just-like-my-grandpa.jpg?s=1024x1024&w=is&k=20&c=QR_5f1HOfJBb3Y1-9wQrRDrCVGGIOSV61fYE9omrxPs=',
        description: 'Las travesuras de un abuelo y su nieto conquistan los corazones de todos.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: 21,
        title: 'Vampire Slayer',
        category: 'Vampiros',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2022/09/12/13/02/halloween-7449380_960_720.jpg',
        description: 'Una heroína solitaria se enfrenta a hordas de vampiros para proteger a su ciudad.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/cutting_orange_tuil_8s_10244kbps_1080p_59.94fps_h264.mp4",
      },
      {
        id: 22,
        title: 'Amor mío',
        category: 'Romance',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2017/06/13/08/45/swamp-2398082_1280.jpg',
        description: 'Un romance prohibido florece entre dos almas opuestas.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/Dancers_8s_10244kbps_1080p_60.0fps_h264.mp4",
      },
      {
        id: 23,
        title: '100% Arcángel',
        category: 'Ciencia Ficción',
        duration: '2 Temporadas',
        src: 'https://cdn.pixabay.com/photo/2016/03/27/21/37/angel-1284369_960_720.jpg',
        description: 'Ángeles y humanos colisionan en una batalla épica por el destino de la Tierra.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      },
      {
        id: 24,
        title: 'Fuga Capital',
        category: 'Comedia',
        duration: '2 Temporadas',
        src: 'https://media.istockphoto.com/id/2170932409/photo/photo-of-shiny-positive-lady-wear-green-sweater-holding-heavy-cash-savings-glass-jar-isolated.jpg?s=1024x1024&w=is&k=20&c=-0HOKfc4UylFZSuWKuimMO9I-rxhgwnO5y1JKAwia-A=',
        description: 'Una mujer corriente se ve envuelto en un robo que pondrá su vida patas arriba.',
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: 25,
        title: 'La Dama',
        category: 'Drama',
        duration: '2 Temporadas',
        src: 'https://cdn.pixabay.com/photo/2022/04/20/06/27/portrait-7144460_1280.jpg',
        description: 'Una mujer poderosa lucha por mantenerse firme en un mundo lleno de intrigas.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/Dancers_8s_10244kbps_1080p_60.0fps_h264.mp4",
      },
      {
        id: 26,
        title: 'El Enfermero',
        category: 'Thriller',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2020/10/30/15/17/horror-5698862_1280.jpg',
        description: 'Un enfermero con un oscuro secreto juega al gato y al ratón con la ley.',
        videoUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_2/segments/cutting_orange_tuil_8s_10244kbps_1080p_59.94fps_h264.mp4",
      },
    ],
  },
}