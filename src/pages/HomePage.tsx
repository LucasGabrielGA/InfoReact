import { useNavigate } from 'react-router-dom';
import MediaCardContainer from '../components/MediaCardContainer';
import MediaCard from '../components/MediaCard';
//import { response } from '../types/mediaData';
import styles from './HomePage.module.css';
import contentMsg from './ContentMessages.module.css';

import { useMovies } from '../hooks/useMovies';
//import { filterCards } from '../utils/filterCards';

/* type OutletContextType = {
  searchTerm: string;
  selectedCategory: string;
}; */

function HomePage() {
  // const { searchTerm, selectedCategory } = useOutletContext<OutletContextType>();
  /* const noResults = allLists.every(({ list }) => filterCards(
    list.cards, searchTerm, selectedCategory).length === 0
  ); */  
  //Función vieja para ocultar las Cards

  //===================================================================================//
  // Código de Entrega 3 //
  //===================================================================================//
/*
  const { recentList, mostPopularList, classicalList, popularShows } = response;

  const allLists = [
    { list: recentList },
    { list: mostPopularList },
    { list: classicalList },
    { list: popularShows },
  ];

  const navigate = useNavigate();
  const handledClickMedia = (id: number) => {
    navigate(`/media/${id}/`);
  };

  const handledClickMediaPlay = (id: number) => {
    navigate(`/media/${id}/play`)
  }
  return (
    <div>
      {allLists.map(({ list }) => (
        <MediaCardContainer
          key={list.listTitle}
          title={list.listTitle}
          description={list.listDescription}
        >
          {list.cards.map(card => (
            <MediaCard
              key={card.id}
              id={card.id}
              title={card.title}
              category={card.category}
              duration={card.duration}
              description={card.description}
              src={card.src}
              videoUrl={card.videoUrl}
              onDetail={() => handledClickMedia(card.id)}
              onPlay={() => handledClickMediaPlay(card.id)}
            />
          ))}
        </MediaCardContainer>
      ))}
    </div>
  );
  */
  //===================================================================================//
  //Código de Entrega 4 //
  //===================================================================================//
  const { data: movies, isLoading, isError } = useMovies();

  const navigate = useNavigate();
  const handledClickMedia = (id: number) => {
    navigate(`/media/${id}/`);
  };

  const handledClickMediaPlay = (id: number) => {
    navigate(`/media/${id}/play`)
  }

  if (isLoading) 
    return (
      <>
        <div className={contentMsg.container}>
        <div className={contentMsg.loadingIcon}></div>
        <p className={contentMsg.loadingMessage}>Cargando contenido...</p>
      </div>
      </>
    );
  if (isError || !movies ) 
    return (
      <div className={contentMsg.container}>
        <div className={contentMsg.errorIcon}>⚠️</div>
        <p className={contentMsg.errorMessage}>Error al cargar las películas.</p>
      </div>
    );
  //===================================================================================//
  return (
    <div className={styles.container}>
      <MediaCardContainer
        title="Películas disponibles"
        description="Todas las películas disponibles en la base de datos"
      >
        {movies.map((card) => (
          <MediaCard
            key={card.id}
            movie={card}
            onDetail={() => handledClickMedia(card.id)}
            onPlay={() => handledClickMediaPlay(card.id)}
          />
        ))}
      </MediaCardContainer>
    </div>
  );
}

export default HomePage;