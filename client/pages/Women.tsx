import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star,
  Heart,
  ShoppingCart,
  Grid3X3,
  List,
  Sparkles
} from 'lucide-react';

const Women = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'dresses', name: 'Dresses', count: 89 },
    { id: 'makeup', name: 'Makeup', count: 156 },
    { id: 'jewelry', name: 'Jewelry', count: 78 },
    { id: 'bags', name: 'Bags', count: 42 },
    { id: 'shoes', name: 'Shoes', count: 67 },
    { id: 'scarves', name: 'Scarves', count: 23 },
    { id: 'accessories', name: 'Accessories', count: 91 },
    { id: 'tops', name: 'Tops & Blouses', count: 54 }
  ];

  const occasions = [
    'Wedding',
    'Party',
    'Business Meeting',
    'Date Night',
    'Casual Outing',
    'Beach/Vacation',
    'Interview',
    'Formal Event'
  ];

  const womenItems = [
    {
      id: 1,
      name: "Elegant Midi Dress",
      category: "Dresses",
      price: "$129",
      image: "👗",
      trend: "Romantic",
      occasion: "Date Night",
      rating: 4.9,
      description: "Flowing midi dress perfect for romantic evenings and special occasions"
    },
    {
      id: 2,
      name: "Rose Gold Eyeshadow Palette",
      category: "Makeup",
      price: "$42",
      image: "💄",
      trend: "Glam",
      occasion: "Party",
      rating: 4.8,
      description: "Luxurious eyeshadow palette with warm rose gold tones"
    },
    {
      id: 3,
      name: "Pearl Drop Earrings",
      category: "Jewelry",
      price: "$89",
      image: "💎",
      trend: "Classic",
      occasion: "Wedding",
      rating: 4.7,
      description: "Timeless pearl earrings that add elegance to any outfit"
    },
    {
      id: 4,
      name: "Designer Handbag",
      category: "Bags",
      price: "$199",
      image: "👜",
      trend: "Luxury",
      occasion: "Business Meeting",
      rating: 4.6,
      description: "Sophisticated handbag perfect for professional settings"
    },
    {
      id: 5,
      name: "Strappy Heeled Sandals",
      category: "Shoes",
      price: "$79",
      image: "👠",
      trend: "Chic",
      occasion: "Party",
      rating: 4.5,
      description: "Elegant strappy sandals that elongate the legs beautifully"
    },
    {
      id: 6,
      name: "Silk Scarf",
      category: "Scarves",
      price: "$65",
      image: "🧣",
      trend: "Sophisticated",
      occasion: "Casual Outing",
      rating: 4.4,
      description: "Luxurious silk scarf that adds a touch of elegance to any look"
    },
    {
      id: 7,
      name: "Statement Necklace",
      category: "Jewelry",
      price: "$118",
      image: "📿",
      trend: "Bold",
      occasion: "Formal Event",
      rating: 4.8,
      description: "Eye-catching statement piece that transforms simple outfits"
    },
    {
      id: 8,
      name: "Classic Trench Coat",
      category: "Accessories",
      price: "$189",
      image: "🧥",
      trend: "Timeless",
      occasion: "Business Meeting",
      rating: 4.9,
      description: "Iconic trench coat that never goes out of style"
    },
    {
      id: 9,
      name: "Red Lipstick",
      category: "Makeup",
      price: "$28",
      image: "💋",
      trend: "Classic",
      occasion: "Date Night",
      rating: 4.7,
      description: "Bold red lipstick for confidence and glamour"
    },
    {
      id: 10,
      name: "Ballet Flats",
      category: "Shoes",
      price: "$69",
      image: "🥿",
      trend: "Comfortable",
      occasion: "Casual Outing",
      rating: 4.6,
      description: "Comfortable yet stylish flats for everyday wear"
    }
  ];

  const filteredItems = womenItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesOccasion = selectedOccasion === 'all' || item.occasion === selectedOccasion;
    
    return matchesSearch && matchesCategory && matchesOccasion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Women's
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Fashion
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore stunning looks for every occasion - from casual chic to red-carpet glamour
          </p>
        </div>

        {/* Trending Banner */}
        <Card className="mb-8 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-semibold text-lg">Spring Collection 2024</h3>
                  <p className="text-muted-foreground">Fresh florals and pastel perfection</p>
                </div>
              </div>
              <Button variant="outline">
                Shop Collection
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search women's fashion..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Occasions</SelectItem>
                    {occasions.map((occasion) => (
                      <SelectItem key={occasion} value={occasion}>
                        {occasion}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="p-4 text-center">
                  <p className="font-medium text-sm">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
          </h2>
          <Button asChild variant="outline">
            <Link to="/suggestion-form">
              <TrendingUp className="mr-2 h-4 w-4" />
              Get Style Suggestions
            </Link>
          </Button>
        </div>

        {/* Items Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
        }>
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
              {viewMode === 'grid' ? (
                <div>
                  <CardContent className="p-0">
                    <div className="relative bg-gradient-to-br from-secondary/20 to-primary/20 h-48 flex items-center justify-center text-6xl overflow-hidden rounded-t-lg">
                      {item.image}
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.trend}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {item.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {item.category} • {item.occasion}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-primary">{item.price}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </CardHeader>
                </div>
              ) : (
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-secondary/20 to-primary/20 w-24 h-24 flex items-center justify-center text-3xl rounded-lg flex-shrink-0">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.category} • {item.occasion}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-primary">{item.price}</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.trend}
                        </Badge>
                        <div className="flex gap-2 ml-auto">
                          <Button size="sm" variant="outline">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Items Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedOccasion('all');
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Beauty Tips Section */}
        <Card className="mt-12 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Beauty & Style Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">💄</div>
                <h3 className="font-semibold mb-2">Makeup Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Choose makeup shades that complement your outfit and skin tone
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="font-semibold mb-2">Jewelry Layering</h3>
                <p className="text-sm text-muted-foreground">
                  Mix and match jewelry pieces to create your unique signature look
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👗</div>
                <h3 className="font-semibold mb-2">Dress Code</h3>
                <p className="text-sm text-muted-foreground">
                  Always dress appropriately for the occasion while expressing your style
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary to-secondary text-white border-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for a Style Makeover?</h2>
            <p className="text-lg mb-6 opacity-90">
              Get personalized fashion and beauty recommendations tailored just for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/suggestion-form">
                  Get Personal Styling
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/wardrobe-analyzer">
                  Analyze My Wardrobe
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Women;
