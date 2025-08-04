import { useParams, useNavigate } from 'react-router-dom';
//import { response, type Card } from '../types/mediaData';
import VideoPlayer from '../components/VideoPlayer';
import { useMovieById } from '../hooks/useMovieById';
import  contentMsg  from './ContentMessages.module.css'

function VideoPlayerPage() {
  //===================================================================================//
  // Código de Entrega 3 //
  //===================================================================================//
  /*
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const allCards: Card[] = [
  ...response.recentList.cards,
  ...response.mostPopularList.cards,
  ...response.classicalList.cards,
  ...response.popularShows.cards,
];

const card = allCards.find(c => c.id === Number(id));

  if (!card) {
    return <p>No se encontró el contenido.</p>;
  }

  return (
    <div>
      <VideoPlayer
        title={card.title}
        src={card.videoUrl}
        onClose={() => navigate(-1)}
      />
    </div>
  );
  */
  //===================================================================================//
  // Código de Entrega 4 //
  //===================================================================================//
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);
  const { data: movie, isLoading, isError } = useMovieById(movieId);

  if (isLoading) 
    return (
      <>
        <div className={contentMsg.container}>
        <div className={contentMsg.loadingIcon}></div>
        <p className={contentMsg.loadingMessage}>Cargando contenido...</p>
      </div>
      </>
    );
  if (isError || !movie ) 
    return (
      <div className={contentMsg.container}>
        <div className={contentMsg.errorIcon}>⚠️</div>
        <p className={contentMsg.errorMessage}>Error al cargar las películas.</p>
      </div>
    );
  
  if (!movie.videoUrl) return <p>Este contenido no tiene un video disponible.</p>;

  return (
    <div>
      <VideoPlayer
        title={movie.title}
        src={movie.videoUrl}
        onClose={() => navigate(-1)}
      />
    </div>
  );
}

export default VideoPlayerPage;