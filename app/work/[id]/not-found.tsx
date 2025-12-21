import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Oswald' }}>
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/#work">
            <Button>Back to Work</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

