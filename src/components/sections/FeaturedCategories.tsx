import imgBest from "@/assets/category-best-seller.jpg";
import imgMens from "@/assets/category-mens.jpg";
import imgWomens from "@/assets/category-womens.jpg";
import { ArrowRight } from "lucide-react";

const categories = [
  { title: "Top Best Seller", img: imgBest, href: "#shop" },
  { title: "Men's Best Seller", img: imgMens, href: "#shop" },
  { title: "Women's Best Seller", img: imgWomens, href: "#shop" },
];

const FeaturedCategories = () => {
  return (
    <section id="shop" className="container mx-auto py-12 md:py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((c) => (
          <a key={c.title} href={c.href} className="group relative overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
            <img src={c.img} alt={`${c.title} category`} loading="lazy" className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.title}</p>
                <p className="text-lg font-semibold">Shop Now</p>
              </div>
              <ArrowRight className="opacity-80 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
