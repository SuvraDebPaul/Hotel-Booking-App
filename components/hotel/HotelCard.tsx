import { Card, CardContent } from "@/components/ui/card";

interface HotelProps {
  id: number;
  name: string;
  images: string[];
  rating: number;
  originalPrice: number;
  roomsLeft: number;  
}

export default function HotelCard({ hotel }: { hotel: HotelProps }) {
  return (
    <Card className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow duration-300 max-w-4xl">
      <CardContent className="p-0 flex flex-col md:flex-row">
        <h2>Card component for hotel: {hotel.name}</h2>
      </CardContent>
    </Card>
  );
}
