import heroImg from "@/assets/hero-watches.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-32 bg-hero-grid overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Limited Edition Of High Quality Watches<span className="text-primary">*</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Meticulously crafted timepieces that blend precision engineering and timeless design.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="hero" size="xl">
              Shop Now
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="outlineLight" size="xl">
              Explore Collections
            </Button>
          </div>

          {/* Mini testimonial card */}
          <Card className="glass-dark w-max mt-6 shadow-elevated">
            <CardContent className="flex items-center gap-3 py-3 pl-3 pr-4">
              <Avatar className="h-8 w-8"><AvatarFallback>JD</AvatarFallback></Avatar>
              <div className="text-sm">
                <p className="font-medium leading-none">John Doe</p>
                <p className="text-muted-foreground">“Absolutely love the craftsmanship.”</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-30" style={{
            background: "radial-gradient(600px 300px at 70% 30%, hsl(var(--primary)/0.15), transparent 60%)"
          }} />
          <img
            src={heroImg}
            alt="Two premium chronograph watches crossing on a dark background"
            className="w-full h-auto rounded-lg shadow-elevated hover-lift"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
