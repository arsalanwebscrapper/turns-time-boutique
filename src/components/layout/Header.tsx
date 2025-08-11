import { Link } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-dark">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#shop" className="hover:text-primary transition-colors">Shop</a>
          <a href="#highlights" className="hover:text-primary transition-colors">Pages</a>
        </nav>

        {/* Brand */}
        <Link to="/" className="text-lg font-semibold tracking-wider">
          TURN'S TIME
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghostOnDark" size="icon" aria-label="Search">
            <Search />
          </Button>
          <Button variant="ghostOnDark" size="icon" aria-label="Cart">
            <ShoppingBag />
          </Button>
          <Button variant="ghostOnDark" size="icon" aria-label="Account">
            <User />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
