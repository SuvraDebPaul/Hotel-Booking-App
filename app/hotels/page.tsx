import HotelCard from "@/components/hotel/HotelCard";
import FilterSidebar from "@/components/search/filterSideBar";
import SearchBar from "@/components/search/searchBar";
import { hotels } from "@/lib/data/hotels";
import { Thotel } from "@/types/hotel";

export default function HotelsPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-50 border-b bg-background">
          <div className="container mx-auto py-4">
            <SearchBar />
          </div>
        </div>

        <div className="container mx-auto py-6 grid grid-cols-12 gap-6">
          {/* Filter Sidebar */}
          <aside className="w-72 lg:col-span-3">
            <FilterSidebar />
          </aside>

          {/* Hotel List */}
          <main className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel: Thotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
