import { Treview } from "@/types/review";

export const reviews: Treview[] = [
  {
    id: 1,
    hotelId: 1,
    user: "Rahim",
    rating: 5,
    comment: "Excellent stay!",
    categories: {
      cleanliness: 5,
      location: 4,
      staff: 5
    }
  },
  {
    id: 2,
    hotelId: 1,
    user: "Karim",
    rating: 4,
    comment: "Good but slightly expensive",
    categories: {
      cleanliness: 4,
      location: 5,
      staff: 4
    }
  }
]