import { useState } from 'react';
import './App.css';
import MediaCard from './components/MediaCard';
import MediaCardContainer from './components/MediaCardContainer';
import Navbar from './components/Navbar';

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
        titulo: 'Película 1',
        category: 'Comedia',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2015/09/03/20/05/construction-workers-921224_1280.jpg'
      },
      {
        id: 2,
        titulo: 'Película 2',
        category: 'Terror',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2019/10/09/13/10/halloween-4537430_960_720.jpg'
      },
      {
        id: 3,
        titulo: 'Película 3',
        category: 'Bélico',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2016/06/09/23/45/soldier-1447008_1280.jpg'
      },
      {
        id: 4,
        titulo: 'Película 4',
        category: 'Ciencia Ficción',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2014/09/11/12/45/spacecraft-441708_1280.jpg'
      },
      {
        id: 5,
        titulo: 'Película 5',
        category: 'Comedia',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2016/02/09/17/43/dogs-1190015_1280.jpg'
      },
      {
        id: 6,
        titulo: 'Película 6',
        category: 'Drama',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2017/06/22/10/08/column-2430240_960_720.jpg'
      },
      {
        id: 7,
        titulo: 'Película 7',
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
        titulo: 'Película 1',
        category: 'Comedia',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2015/09/03/20/05/construction-workers-921224_1280.jpg'
      },
      {
        id: 2,
        titulo: 'Película 2',
        category: 'Terror',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2019/10/09/13/10/halloween-4537430_960_720.jpg'
      },
      {
        id: 3,
        titulo: 'Película 3',
        category: 'Bélico',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2016/06/09/23/45/soldier-1447008_1280.jpg'
      },
      {
        id: 4,
        titulo: 'Película 4',
        category: 'Ciencia Ficción',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2014/09/11/12/45/spacecraft-441708_1280.jpg'
      },
      {
        id: 5,
        titulo: 'Película 5',
        category: 'Comedia',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2016/02/09/17/43/dogs-1190015_1280.jpg'
      },
      {
        id: 6,
        titulo: 'Película 6',
        category: 'Drama',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2017/06/22/10/08/column-2430240_960_720.jpg'
      },
      {
        id: 7,
        titulo: 'Película 7',
        category: 'Thriller',
        duration: '2:05',
        src: 'https://cdn.pixabay.com/photo/2017/07/17/23/14/horror-2514218_1280.jpg'
      },
    ],
  },
  classicalList:{
    listTitle: 'Clásicos',
    listDescription: 'Películas y Series Clásicas',
    cards:[
      {
        id: 1,
        titulo: 'Película 1',
        category: 'Comedia',
        duration: '1:20',
        src: 'https://cdn.pixabay.com/photo/2015/09/03/20/05/construction-workers-921224_1280.jpg'
      },
      {
        id: 2,
        titulo: 'Película 2',
        category: 'Terror',
        duration: '1:36',
        src: 'https://cdn.pixabay.com/photo/2019/10/09/13/10/halloween-4537430_960_720.jpg'
      },
      {
        id: 3,
        titulo: 'Película 3',
        category: 'Bélico',
        duration: '2:15',
        src: 'https://cdn.pixabay.com/photo/2016/06/09/23/45/soldier-1447008_1280.jpg'
      },
      {
        id: 4,
        titulo: 'Película 4',
        category: 'Ciencia Ficción',
        duration: '1:55',
        src: 'https://cdn.pixabay.com/photo/2014/09/11/12/45/spacecraft-441708_1280.jpg'
      },
      {
        id: 5,
        titulo: 'Película 5',
        category: 'Comedia',
        duration: '1:57',
        src: 'https://cdn.pixabay.com/photo/2016/02/09/17/43/dogs-1190015_1280.jpg'
      },
      {
        id: 6,
        titulo: 'Película 6',
        category: 'Drama',
        duration: '2:30',
        src: 'https://cdn.pixabay.com/photo/2017/06/22/10/08/column-2430240_960_720.jpg'
      },
      {
        id: 7,
        titulo: 'Película 7',
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
        titulo: 'Serie 1',
        category: 'Comedia',
        duration: '3 Temporadas',
        src: 'https://media.istockphoto.com/id/2161726514/photo/i-am-just-like-my-grandpa.jpg?s=1024x1024&w=is&k=20&c=QR_5f1HOfJBb3Y1-9wQrRDrCVGGIOSV61fYE9omrxPs='
      },
      {
        id: 2,
        titulo: 'Serie 2',
        category: 'Terror',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2022/09/12/13/02/halloween-7449380_960_720.jpg'
      },
      {
        id: 3,
        titulo: 'Serie 3',
        category: 'Drama',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2017/06/13/08/45/swamp-2398082_1280.jpg'
      },
      {
        id: 4,
        titulo: 'Serie 4',
        category: 'Ciencia Ficción',
        duration: '2 Temporadas',
        src: 'https://cdn.pixabay.com/photo/2016/03/27/21/37/angel-1284369_960_720.jpg'
      },
      {
        id: 5,
        titulo: 'Serie 5',
        category: 'Comedia',
        duration: '2 Temporadas',
        src: 'https://media.istockphoto.com/id/2170932409/photo/photo-of-shiny-positive-lady-wear-green-sweater-holding-heavy-cash-savings-glass-jar-isolated.jpg?s=1024x1024&w=is&k=20&c=-0HOKfc4UylFZSuWKuimMO9I-rxhgwnO5y1JKAwia-A='
      },
      {
        id: 6,
        titulo: 'Serie 6',
        category: 'Drama',
        duration: '2 Temporadas',
        src: 'https://cdn.pixabay.com/photo/2022/04/20/06/27/portrait-7144460_1280.jpg'
      },
      {
        id: 7,
        titulo: 'Serie 7',
        category: 'Thriller',
        duration: '1 Temporada',
        src: 'https://cdn.pixabay.com/photo/2020/10/30/15/17/horror-5698862_1280.jpg'
      },
    ],
  },
};

function App(){
  const { recentList, mostPopularList, classicalList, popularShows } = response;
  return(
    <div>
      <Navbar />
      <MediaCardContainer
        title ={recentList.listTitle}
        description={recentList.listDescription}
      >
        {recentList.cards.map((card) => {
          return (
            <MediaCard
              key={card.id}
              title={card.titulo}
              category={card.category}
              duration={card.duration}
              src={card.src}
            />
          );
        })}
      </MediaCardContainer>
      <MediaCardContainer
        title ={mostPopularList.listTitle}
        description={mostPopularList.listDescription}
      >
        {mostPopularList.cards.map((card) => {
          return (
            <MediaCard
              key={card.id}
              title={card.titulo}
              category={card.category}
              duration={card.duration}
              src={card.src}
            />
          );
        })}
      </MediaCardContainer>
      <MediaCardContainer
        title ={classicalList.listTitle}
        description={classicalList.listDescription}
      >
        {classicalList.cards.map((card) => {
          return (
            <MediaCard
              key={card.id}
              title={card.titulo}
              category={card.category}
              duration={card.duration}
              src={card.src}
            />
          );
        })}
      </MediaCardContainer>
      <MediaCardContainer
        title ={popularShows.listTitle}
        description={popularShows.listDescription}
      >
        {popularShows.cards.map((card) => {
          return (
            <MediaCard
              key={card.id}
              title={card.titulo}
              category={card.category}
              duration={card.duration}
              src={card.src}
            />
          );
        })}
      </MediaCardContainer>
    </div>
  );
}

export default App;