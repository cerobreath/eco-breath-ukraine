import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Leaf, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-light pt-20">
      <div className="text-center max-w-md px-4">
        <div className="mb-6">
          <Leaf className="h-16 w-16 text-eco mx-auto" />
        </div>
        <h1 className="text-6xl font-bold text-eco-dark mb-4">404</h1>
        <p className="text-xl mb-8">
          Упс! Сторінку не знайдено. Можливо, вона була переміщена або видалена.
        </p>
        <Button asChild size="lg" className="bg-eco hover:bg-eco-dark">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> Повернутися на головну
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
