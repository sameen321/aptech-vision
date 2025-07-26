import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Sparkles, 
  Camera, 
  Users, 
  Palette, 
  TrendingUp, 
  Star,
  ArrowRight,
  Heart,
  Zap
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Personalized Suggestions",
      description: "Get outfit recommendations tailored to your style, occasion, and preferences"
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Wardrobe Analysis",
      description: "Upload your clothes and get insights on how to style them perfectly"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Trending Styles",
      description: "Stay updated with the latest fashion trends and seasonal recommendations"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Color Matching",
      description: "Find the perfect colors that complement your skin tone"
    }
  ];

  const categories = [
    {
      name: "Men's Fashion",
      path: "/men",
      image: "👔",
      description: "Discover the latest trends in men's fashion"
    },
    {
      name: "Women's Fashion", 
      path: "/women",
      image: "👗",
      description: "Explore stunning looks for every occasion"
    },
    {
      name: "Kids Fashion",
      path: "/kids", 
      image: "👶",
      description: "Cute and comfortable styles for little ones"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            Your Personalized Fashion Assistant
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Discover Your
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Perfect Style
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            FitFix helps you create stunning outfits with AI-powered suggestions based on your preferences, 
            skin tone, occasion, and existing wardrobe. Never struggle with what to wear again!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
              <Link to="/suggestion-form">
                Get Your Fashion Suggestion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              <Link to="/wardrobe-analyzer">
                <Camera className="mr-2 h-5 w-5" />
                Analyze My Wardrobe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose FitFix?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our advanced fashion intelligence makes styling effortless and personalized
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our curated fashion collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={category.path} className="group">
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-48 flex items-center justify-center text-6xl">
                      {category.image}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Heart className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of fashion-forward individuals who trust FitFix for their daily styling needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6 h-auto">
              <Link to="/suggestion-form">
                Start Styling Now
                <Star className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  FitFix
                </span>
              </Link>
              <p className="text-muted-foreground max-w-md">
                Your personalized fashion assistant powered by AI. Discover your perfect style with intelligent recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FitFix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
