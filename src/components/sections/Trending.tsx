import p1 from "@/assets/product-midnight-pulse.jpg";
import p2 from "@/assets/product-solstice-infinity.jpg";
import p3 from "@/assets/product-aurora-chrono.jpg";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const products = [
  { name: "Midnight Pulse", price: 275, img: p1 },
  { name: "Solstice Infinity", price: 375, img: p2 },
  { name: "Aurora Chrono", price: 2000, img: p3 },
];

const Trending = () => {
  const { toast } = useToast();

  const addToCart = (name: string) =>
    toast({ title: "Added to cart", description: `${name} has been added to your bag.` });

  return (
    <section className="bg-background" aria-labelledby="trending">
      <div className="container mx-auto py-14 md:py-20 text-center">
        <h2 id="trending" className="text-3xl md:text-4xl font-bold mb-2">Trending Now</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Explore our most sought-after timepieces, curated for timeless style and precision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="rounded-lg bg-card p-6 shadow-elevated hover-lift">
              <img src={p.img} alt={`${p.name} watch`} loading="lazy" className="w-full h-56 object-contain mb-6" />
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-sm">${p.price.toFixed(2)}</p>
              </div>
              <div className="mt-6">
                <Button variant="outlineLight" className="w-full" onClick={() => addToCart(p.name)}>
                  Add To Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
