export interface ArtistType {
  id: number;
  name: string;
  cover: string;
  bio: string;
  url:string;
  albums: Album[];
}

interface Album {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
}
