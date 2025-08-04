// Mock movie database
let moviesDB = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: ['Drama'],
    director: 'Frank Darabont',
    rating: 9.3,
    runtime: 142,
    plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster:
      'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: 'The Godfather',
    year: 1972,
    genre: ['Crime', 'Drama'],
    director: 'Francis Ford Coppola',
    rating: 9.2,
    runtime: 175,
    plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster:
      'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    director: 'Christopher Nolan',
    rating: 9.0,
    runtime: 152,
    plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
    poster:
      'https://images.pexels.com/photos/7991578/pexels-photo-7991578.jpeg?auto=compress&cs=tinysrgb&w=400',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    year: 1994,
    genre: ['Crime', 'Drama'],
    director: 'Quentin Tarantino',
    rating: 8.9,
    runtime: 154,
    plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    poster:
      'https://images.pexels.com/photos/7991577/pexels-photo-7991577.jpeg?auto=compress&cs=tinysrgb&w=400',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: 5,
    title: 'Forrest Gump',
    year: 1994,
    genre: ['Drama', 'Romance'],
    director: 'Robert Zemeckis',
    rating: 8.8,
    runtime: 142,
    plot: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man.',
    poster:
      'https://images.pexels.com/photos/7991576/pexels-photo-7991576.jpeg?auto=compress&cs=tinysrgb&w=400',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 6,
    title: 'Inception',
    year: 2010,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    director: 'Christopher Nolan',
    rating: 8.8,
    runtime: 148,
    plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    poster:
      'https://images.pexels.com/photos/7991575/pexels-photo-7991575.jpeg?auto=compress&cs=tinysrgb&w=400',
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy'],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
];

// Get next available ID
export const getNextId = () => {
  return Math.max(...moviesDB.map((movie) => movie.id)) + 1;
};

export { moviesDB };