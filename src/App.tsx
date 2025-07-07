import { useState } from 'react';
import './App.css';
import MediaCard from './components/MediaCard';
import MediaCardContainer from './components/MediaCardContainer';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';

type Card = {
  id: number;
  titulo: string;
  category: string;
  duration: string;
  src: string;
};

type Response = {
  recentList:{
    listTitle: string;
    listDescription: string;
    cards: Card[];
  };
  mostPopularList:{
    listTitle: string;
    listDescription: string;
    cards: Card[];
  };
  classicalList:{
    listTitle: string;
    listDescription: string;
    cards: Card[];
  };
  popularShows:{
    listTitle: string;
    listDescription: string;
    cards: Card[];
  };
};

const response: Response = {
  recentList:{
    listTitle: 'Lo más reciente',
    listDescription: 'Lo recién subido a la plataforma.',
    cards:[
      {
        id: 1,
        titulo: 'Amigo Taladro',
        category: 'Comedia',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2015/09/03/20/05/construction-workers-921224_1280.jpg'
      },
      {
        id: 2,
        titulo: 'Tras la ventana',
        category: 'Terror',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2019/10/09/13/10/halloween-4537430_960_720.jpg'
      },
      {
        id: 3,
        titulo: 'Tácticos',
        category: 'Acción',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2016/06/09/23/45/soldier-1447008_1280.jpg'
      },
      {
        id: 4,
        titulo: 'Mike y Cath',
        category: 'Aventura',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2025/01/08/05/13/dark-9318211_1280.png'
      },
      {
        id: 5,
        titulo: 'Perrunos',
        category: 'Comedia',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2016/02/09/17/43/dogs-1190015_1280.jpg'
      },
      {
        id: 6,
        titulo: 'La Ciudad Gris',
        category: 'Drama',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2017/06/22/10/08/column-2430240_960_720.jpg'
      },
      {
        id: 7,
        titulo: 'Dexter',
        category: 'Thriller',
        duration: '2:05',
        src: 'https://cdn.pixabay.com/photo/2017/07/17/23/14/horror-2514218_1280.jpg'
      },
    ],
  },
  mostPopularList:{
    listTitle: 'Lo más popular',
    listDescription: 'Lo más visto por los usuarios.',
    cards:[
      {
        id: 1,
        titulo: 'Amigo Taladro',
        category: 'Comedia',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2015/09/03/20/05/construction-workers-921224_1280.jpg'
      },
      {
        id: 2,
        titulo: 'Comedy Gold',
        category: 'Comedia',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2021/02/27/13/42/comedy-6054626_1280.jpg'
      },
      {
        id: 3,
        titulo: 'Esperanza fría',
        category: 'Acción',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2025/03/29/09/32/ai-generated-9500630_1280.jpg'
      },
      {
        id: 4,
        titulo: 'Viaje Espacial',
        category: 'Ciencia Ficción',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2014/09/11/12/45/spacecraft-441708_1280.jpg'
      },
      {
        id: 5,
        titulo: 'El Viaje de Jane',
        category: 'Aventura',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2019/05/31/09/16/surreal-4241789_1280.jpg'
      },
      {
        id: 6,
        titulo: 'África Salvaje',
        category: 'Documental',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2017/09/25/17/02/africa-2785836_1280.jpg'
      },
      {
        id: 7,
        titulo: 'John Payne',
        category: 'Noir',
        duration: '2:05',
        src: 'https://cdn.pixabay.com/photo/2024/01/28/02/28/man-8537038_1280.png'
      },
    ],
  },
  classicalList:{
    listTitle: 'Clásicos',
    listDescription: 'Películas y Series Clásicas',
    cards:[
      {
        id: 1,
        titulo: 'Sueño de Vuelo',
        category: 'Drama',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2016/01/05/16/14/hdr-1122860_1280.jpg'
      },
      {
        id: 2,
        titulo: 'Viaje Especial',
        category: 'Ciencia Ficción',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2014/09/11/12/45/spacecraft-441708_1280.jpg'
      },
      {
        id: 3,
        titulo: 'Angela Noir',
        category: 'Noir',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2024/01/28/01/49/woman-8537024_960_720.png'
      },
      {
        id: 4,
        titulo: 'El Bosque',
        category: 'Terror',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2020/04/23/00/43/chernobyl-5080601_1280.jpg'
      },
      {
        id: 5,
        titulo: 'Fistful of Frags',
        category: 'Western',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2024/02/29/18/58/ai-generated-8605032_960_720.jpg'
      },
      {
        id: 6,
        titulo: 'Paz',
        category: 'Bélico',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2020/01/13/01/58/was-4761474_1280.jpg'
      },
      {
        id: 7,
        titulo: 'Dexter',
        category: 'Thriller',
        duration: '2:05',
        src: 'https://cdn.pixabay.com/photo/2017/07/17/23/14/horror-2514218_1280.jpg'
      },
    ],
  },
  popularShows:{
    listTitle: 'Series Populares',
    listDescription: 'Las series más vistas por los usuarios.',
    cards:[
      {
        id: 1,
        titulo: 'Mi Abuelo y Yo',
        category: 'Comedia',
        duration: '3 Temporadas',
        src: 'https://media.istockphoto.com/id/2161726514/photo/i-am-just-like-my-grandpa.jpg?s=1024x1024&w=is&k=20&c=QR_5f1HOfJBb3Y1-9wQrRDrCVGGIOSV61fYE9omrxPs='
      },
      {
        id: 2,
        titulo: 'Vampire Slayer',
        category: 'Vampiros',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2022/09/12/13/02/halloween-7449380_960_720.jpg'
      },
      {
        id: 3,
        titulo: 'Amor mío',
        category: 'Romance',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2017/06/13/08/45/swamp-2398082_1280.jpg'
      },
      {
        id: 4,
        titulo: '100% Arcángel',
        category: 'Ciencia Ficción',
        duration: '2 Temporadas',
        src: 'https://cdn.pixabay.com/photo/2016/03/27/21/37/angel-1284369_960_720.jpg'
      },
      {
        id: 5,
        titulo: 'Fuga Capital',
        category: 'Comedia',
        duration: '2 Temporadas',
        src: 'https://media.istockphoto.com/id/2170932409/photo/photo-of-shiny-positive-lady-wear-green-sweater-holding-heavy-cash-savings-glass-jar-isolated.jpg?s=1024x1024&w=is&k=20&c=-0HOKfc4UylFZSuWKuimMO9I-rxhgwnO5y1JKAwia-A='
      },
      {
        id: 6,
        titulo: 'La Dama',
        category: 'Drama',
        duration: '2 Temporadas',
        src: 'https://cdn.pixabay.com/photo/2022/04/20/06/27/portrait-7144460_1280.jpg'
      },
      {
        id: 7,
        titulo: 'El Enfermero',
        category: 'Thriller',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2020/10/30/15/17/horror-5698862_1280.jpg'
      },
    ],
  },
};

function App(){
  //================================================================================//
  // Para manejar el Input y Select del Navbar
  //================================================================================//
  const [searchTerm, setSearchTerm] = useState(''); //La variable para el input
  const [selectedCategory, setSelectedCategory] = useState(''); //La variable para el uso del select

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase()); //término de búsqueda para la barra predictivda del input
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value); //categoría seleccionada en el select
  };
  //================================================================================//
  // Para la visibilidad del VideoPlayer, las MediaCards y Containers
  //================================================================================//
  const [isVisiblePage, setIsVisiblePage] = useState(true);
  const [isVisibleItem, setIsVisibleItem] = useState(false);

  //Manejador que invierte la visibilidad de las Cards y el VideoPlayer
  function handledClickMedia(){
        setIsVisiblePage(!isVisiblePage);
        setIsVisibleItem(!isVisibleItem);
  }
  //================================================================================//
  // Las listas para el control de las MediaCards
  //================================================================================//
  const { recentList, mostPopularList, classicalList, popularShows } = response;
  const allCards = [
    ...recentList.cards,
    ...mostPopularList.cards,
    ...classicalList.cards,
    ...popularShows.cards,
  ];
  //================================================================================//
  // Las listas filtradas por título y categoría
  //================================================================================//
  const filteredRecent = recentList.cards.filter(card =>
    card.titulo.toLowerCase().startsWith(searchTerm) &&
    (selectedCategory ? card.category === selectedCategory : true)
  );
  const filteredPopular = mostPopularList.cards.filter(card =>
    card.titulo.toLowerCase().startsWith(searchTerm) &&
    (selectedCategory ? card.category === selectedCategory : true)
  );
  const filteredClassical = classicalList.cards.filter(card =>
    card.titulo.toLowerCase().startsWith(searchTerm) &&
    (selectedCategory ? card.category === selectedCategory : true)
  );
  const filteredShows = popularShows.cards.filter(card =>
    card.titulo.toLowerCase().startsWith(searchTerm) &&
    (selectedCategory ? card.category === selectedCategory : true)
  )

  // Esto es para mostrar un mensaje si no hay coincidencias en la búsqueda
  const noResults = (
    filteredRecent.length === 0 &&
    filteredPopular.length === 0 &&
    filteredClassical.length === 0 &&
    filteredShows.length === 0
  )
  //================================================================================//

  return(
    <div>
      {isVisibleItem && (
        <>
          <VideoPlayer onClose={handledClickMedia}></VideoPlayer>
        </>
      )}
      {isVisiblePage && (
        <>
        <Navbar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          allCards={allCards}
          onPlay={handledClickMedia}
        />
        {noResults && (
          <p className='noResultsMsg'>
            No se encontraron resultados para tu búsqueda.
          </p>
        )}
        {filteredRecent.length > 0 && (
          <MediaCardContainer
            title={recentList.listTitle}
            description={recentList.listDescription}
          >
            {filteredRecent.map(card => (
              <MediaCard
                key={card.id}
                title={card.titulo}
                category={card.category}
                duration={card.duration}
                src={card.src}
                onPlay={handledClickMedia}
              />
            ))}
          </MediaCardContainer>
        )}

        {filteredPopular.length > 0 && (
          <MediaCardContainer
            title={mostPopularList.listTitle}
            description={mostPopularList.listDescription}
          >
            {filteredPopular.map(card => (
              <MediaCard
                key={card.id}
                title={card.titulo}
                category={card.category}
                duration={card.duration}
                src={card.src}
                onPlay={handledClickMedia}
              />
            ))}
          </MediaCardContainer>
        )}
        
        {filteredClassical.length > 0 && (
          <MediaCardContainer
            title={classicalList.listTitle}
            description={classicalList.listDescription}
          >
            {filteredClassical.map(card => (
              <MediaCard
                key={card.id}
                title={card.titulo}
                category={card.category}
                duration={card.duration}
                src={card.src}
                onPlay={handledClickMedia}
              />
            ))}
          </MediaCardContainer>
        )}

        {filteredShows.length > 0 && (
          <MediaCardContainer
            title={popularShows.listTitle}
            description={popularShows.listDescription}
          >
            {filteredShows.map(card => (
              <MediaCard
                key={card.id}
                title={card.titulo}
                category={card.category}
                duration={card.duration}
                src={card.src}
                onPlay={handledClickMedia}
              />
            ))}
          </MediaCardContainer>
        )}
        </>
      )}
    </div>
  );
}

export default App;