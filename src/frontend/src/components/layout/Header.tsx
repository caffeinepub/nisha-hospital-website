import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academics', href: '/academics' },
  { name: 'Campus Life', href: '/campus-life' },
  { name: 'News & Events', href: '/news-events' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img
            src="/assets/generated/college-crest-logo.dim_512x512.png"
            alt="College Crest"
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-tight text-primary">
              Heritage College
            </span>
            <span className="text-xs text-muted-foreground">Est. 1892</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                currentPath === item.href
                  ? 'text-primary'
                  : 'text-foreground/70'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="ml-4" size="sm">
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    to={item.href}
                    className={`px-4 py-3 text-base font-medium transition-colors hover:text-primary rounded-md ${
                      currentPath === item.href
                        ? 'bg-accent text-primary'
                        : 'text-foreground/70'
                    }`}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-4">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
