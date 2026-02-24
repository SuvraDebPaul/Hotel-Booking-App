import { Troom } from "@/types/room";

export const rooms: Troom[] = [
  {
    id: 1,
    hotelId: 1,
    type: "Deluxe",
    occupancy: 2,
    bedType: "King",
    price: 8200,
    freeCancellation: true
  },
  {
    id: 2,
    hotelId: 1,
    type: "Suite",
    occupancy: 4,
    bedType: "King",
    price: 12000,
    freeCancellation: true
  },
  {
    id: 3,
    hotelId: 2,
    type: "Family",
    occupancy: 4,
    bedType: "Double",
    price: 9500,
    freeCancellation: false
  }
]