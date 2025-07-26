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
  Baby,
  Smile
} from 'lucide-react';

const Kids = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'dresses', name: 'Dresses & Outfits', count: 45 },
    { id: 'schoolwear', name: 'School Wear', count: 38 },
    { id: 'casual', name: 'Casual Wear', count: 62 },
    { id: 'shoes', name: 'Shoes', count: 34 },
    { id: 'hats', name: 'Hats & Caps', count: 18 },
    { id: 'bags', name: 'Bags & Backpacks', count: 25 },
    { id: 'sleepwear', name: 'Sleepwear', count: 29 },
    { id: 'accessories', name: 'Accessories', count: 31 }
  ];

  const ageGroups = [
    'Newborn (0-3 months)',
    'Baby (3-12 months)',
    'Toddler (1-3 years)',
    'Preschool (3-5 years)',
    'School Age (6-8 years)',
    'Tween (9-12 years)',
    'Teen (13+ years)'
  ];

  const kidsItems = [
    {
      id: 1,
      name: "Rainbow Tutu Dress",
      category: "Dresses & Outfits",
      price: "$35",
      image: "🌈",
      trend: "Colorful",
      ageGroup: "Preschool (3-5 years)",
      rating: 4.9,
      description: "Magical rainbow tutu dress perfect for parties and special occasions"
    },
    {
      id: 2,
      name: "School Uniform Set",
      category: "School Wear",
      price: "$45",
      image: "🎒",
      trend: "Classic",
      ageGroup: "School Age (6-8 years)",
      rating: 4.8,
      description: "Complete school uniform set including shirt, pants, and tie"
    },
    {
      id: 3,
      name: "Dinosaur Sneakers",
      category: "Shoes",
      price: "$29",
      image: "👟",
      trend: "Fun",
      ageGroup: "Toddler (1-3 years)",
      rating: 4.7,
      description: "Light-up dinosaur sneakers that make walking an adventure"
    },
    {
      id: 4,
      name: "Superhero Cape",
      category: "Accessories",
      price: "$18",
      image: "🦸",
      trend: "Heroic",
      ageGroup: "Preschool (3-5 years)",
      rating: 4.6,
      description: "Transform into a superhero with this vibrant cape"
    },
    {
      id: 5,
      name: "Cozy Pajama Set",
      category: "Sleepwear",
      price: "$22",
      image: "🌙",
      trend: "Comfort",
      ageGroup: "School Age (6-8 years)",
      rating: 4.8,
      description: "Soft and comfortable pajama set for sweet dreams"
    },
    {
      id: 6,
      name: "Baseball Cap",
      category: "Hats & Caps",
      price: "$15",
      image: "🧢",
      trend: "Sporty",
      ageGroup: "Tween (9-12 years)",
      rating: 4.5,
      description: "Adjustable baseball cap perfect for outdoor activities"
    },
    {
      id: 7,
      name: "Cartoon Backpack",
      category: "Bags & Backpacks",
      price: "$32",
      image: "🎒",
      trend: "Cute",
      ageGroup: "School Age (6-8 years)",
      rating: 4.7,
      description: "Fun cartoon character backpack perfect for school"
    },
    {
      id: 8,
      name: "Denim Overalls",
      category: "Casual Wear",
      price: "$38",
      image: "👶",
      trend: "Classic",
      ageGroup: "Toddler (1-3 years)",
      rating: 4.6,
      description: "Adorable denim overalls for everyday comfort and style"
    },
    {
      id: 9,
      name: "Princess Tiara",
      category: "Accessories",
      price: "$12",
      image: "👑",
      trend: "Elegant",
      ageGroup: "Preschool (3-5 years)",
      rating: 4.8,
      description: "Sparkly tiara for little princesses to feel royal"
    },
    {
      id: 10,
      name: "Rain Boots",
      category: "Shoes",
      price: "$24",
      image: "🌧️",
      trend: "Practical",
      ageGroup: "Toddler (1-3 years)",
      rating: 4.5,
      description: "Waterproof rain boots with fun patterns for puddle jumping"
    }
  ];

  const filteredItems = kidsItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesAge = selectedAge === 'all' || item.ageGroup === selectedAge;
    
    return matchesSearch && matchesCategory && matchesAge;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kids
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Fashion
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cute, comfortable, and colorful styles that let kids be kids while looking their best
          </p>
        </div>

        {/* Fun Banner */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-100 to-pink-100 border-yellow-200 dark:from-yellow-900/20 dark:to-pink-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Baby className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-lg">Back to School Collection</h3>
                  <p className="text-muted-foreground">Durable, comfortable, and stylish pieces for the new school year</p>
                </div>
              </div>
              <Button variant="outline">
                Shop Now
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
                    placeholder="Search kids fashion..."
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

                <Select value={selectedAge} onValueChange={setSelectedAge}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Age Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ages</SelectItem>
                    {ageGroups.map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
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

        {/* Age Groups */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shop by Age</h2>
          <div className="flex flex-wrap gap-3">
            {ageGroups.map((age) => (
              <Badge
                key={age}
                variant={selectedAge === age ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setSelectedAge(age)}
              >
                {age}
              </Badge>
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
              <Smile className="mr-2 h-4 w-4" />
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
                    <div className="relative bg-gradient-to-br from-yellow-50 to-pink-50 dark:from-yellow-900/10 dark:to-pink-900/10 h-48 flex items-center justify-center text-6xl overflow-hidden rounded-t-lg">
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
                          {item.category} • {item.ageGroup}
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
                    <div className="bg-gradient-to-br from-yellow-50 to-pink-50 dark:from-yellow-900/10 dark:to-pink-900/10 w-24 h-24 flex items-center justify-center text-3xl rounded-lg flex-shrink-0">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.category} • {item.ageGroup}
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
                setSelectedAge('all');
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Parent Tips Section */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200 dark:from-green-900/20 dark:to-blue-900/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Parenting Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🧼</div>
                <h3 className="font-semibold mb-2">Easy Care</h3>
                <p className="text-sm text-muted-foreground">
                  Choose machine-washable fabrics that can handle everyday adventures
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📏</div>
                <h3 className="font-semibold mb-2">Room to Grow</h3>
                <p className="text-sm text-muted-foreground">
                  Consider sizing up for clothes that will last through growth spurts
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold mb-2">Let Them Choose</h3>
                <p className="text-sm text-muted-foreground">
                  Encourage kids to express themselves through colors and patterns they love
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary to-secondary text-white border-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg mb-6 opacity-90">
              Get personalized recommendations based on your child's age, preferences, and activities
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/suggestion-form">
                <Baby className="mr-2 h-4 w-4" />
                Get Kids Style Suggestions
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Kids;
