import { useParams, useNavigate } from 'react-router-dom';
import { response, type Card } from '../types/mediaData';
import VideoPlayer from '../components/VideoPlayer';

function VideoPlayerPage() {
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
}

export default VideoPlayerPage;