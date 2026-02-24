export interface Treview {
  id: number;
  hotelId: number;
  user: string;
  rating: number;
  comment: string;
  categories: {
    cleanliness: number;
    location: number;
    staff: number;
  };
}
