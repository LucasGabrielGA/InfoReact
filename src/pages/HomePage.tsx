import { useNavigate } from 'react-router-dom';
import MediaCardContainer from '../components/MediaCardContainer';
import MediaCard from '../components/MediaCard';
import { response } from '../types/mediaData';
//import { filterCards } from '../utils/filterCards';

/* type OutletContextType = {
  searchTerm: string;
  selectedCategory: string;
}; */

function HomePage() {
  // const { searchTerm, selectedCategory } = useOutletContext<OutletContextType>();

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

  /* const noResults = allLists.every(({ list }) => filterCards(
    list.cards, searchTerm, selectedCategory).length === 0
  ); */  
  //Función vieja para ocultar las Cards

  return (
    <div>
      {/* {noResults && (
        <p className="noResultsMsg">
          No se encontraron resultados para tu búsqueda.
        </p>
      )} */}
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
}

export default HomePage;