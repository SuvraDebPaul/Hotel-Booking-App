export interface Thotel {
    id: number,
    name: string,
    location: string,
    rating: number,
    reviewsCount: number,
    pricePerNight: number,
    discountPrice: number,
    originalPrice: number,
    propertyType: string,
    freeCancellation: boolean,
    breakfastIncluded: boolean,
    roomsLeft: number,
    facilities: string[],
    coordinates: { lat: number, lng: number },
    images: string[]
}