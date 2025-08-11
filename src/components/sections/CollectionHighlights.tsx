import h1 from "@/assets/highlight-1.jpg";
import h2 from "@/assets/highlight-2.jpg";
import h3 from "@/assets/highlight-3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const images = [h1, h2, h3];

const CollectionHighlights = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="highlights" className="container mx-auto py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Collection Highlights</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Everyday</h3>
          <ul className="space-y-3 text-lg">
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Top Rated</li>
            <li>Most Popular</li>
            <li>Digital</li>
          </ul>
        </div>
        <div className="relative">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((src, idx) => (
                <CarouselItem key={idx}>
                  <img src={src} alt={`Collection highlight ${idx + 1}`} loading="lazy" className="w-full h-[420px] md:h-[520px] object-cover rounded-lg shadow-elevated" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="outlineLight" />
            <CarouselNext variant="outlineLight" />
          </Carousel>
          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${selectedIndex === i ? 'bg-primary' : 'bg-foreground/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionHighlights;
