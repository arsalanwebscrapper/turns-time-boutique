import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import Trending from "@/components/sections/Trending";
import CollectionHighlights from "@/components/sections/CollectionHighlights";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : 'https://turns-time.example.com';
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>TURN'S TIME — Luxury Watches Boutique</title>
        <meta name="description" content="Limited edition, high quality luxury watches. Shop premium chronographs and curated collections at TURN'S TIME." />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: "TURN'S TIME",
          url: canonical,
          logo: '/favicon.ico',
          sameAs: []
        })}</script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <Trending />
        <CollectionHighlights />
      </main>
    </div>
  );
};

export default Index;
