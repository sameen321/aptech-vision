import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Sparkles, 
  Palette, 
    Footprints, 
  Crown, 
  ShoppingBag,
  ArrowLeft,
  RefreshCw,
  Heart,
  Share
} from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const { formData, uploadedImages, categories } = location.state || {};

  // Generate personalized suggestions based on user input
  const generateSuggestions = () => {
    if (!formData) return null;

    const { occasion, skinTone, styleChoice, season, comfortPreference } = formData;

    // Outfit suggestions based on occasion and style
    const outfitSuggestions = {
      'wedding': {
        'modern': { name: "Contemporary Formal Wear", color: "Deep Navy", image: "🤵", reason: "Modern cut with classic elegance perfect for weddings" },
        'traditional': { name: "Classic Formal Suit", color: "Charcoal Grey", image: "👔", reason: "Timeless formal wear that respects traditional wedding dress codes" },
        'vintage': { name: "Retro Style Outfit", color: "Burgundy", image: "🎩", reason: "Vintage-inspired look that adds character to wedding celebrations" }
      },
      'party': {
        'modern': { name: "Trendy Party Outfit", color: "Black", image: "🕺", reason: "Sleek modern look perfect for evening parties" },
        'sporty': { name: "Smart Casual", color: "Dark Blue", image: "👕", reason: "Comfortable yet stylish for casual party vibes" },
        'trendy': { name: "Statement Look", color: "Emerald Green", image: "✨", reason: "Bold choice that makes you stand out at parties" }
      },
      'interview': {
        'classic': { name: "Professional Business Attire", color: "Navy Blue", image: "💼", reason: "Conservative and professional, perfect for making a good first impression" },
        'modern': { name: "Contemporary Professional", color: "Charcoal", image: "👔", reason: "Modern professional look that shows confidence and competence" }
      },
      'casual outing': {
        'casual': { name: "Relaxed Casual Wear", color: "Light Blue", image: "👕", reason: "Comfortable and easy-going for casual day out" },
        'sporty': { name: "Athletic Casual", color: "Grey", image: "👟", reason: "Perfect blend of comfort and style for active outings" }
      }
    };

    // Makeup suggestions based on skin tone and occasion
    const makeupSuggestions = {
      'fair': {
        'party': { style: "Dramatic Evening", shade: "Cool Tones", image: "💄", tips: ["Use cool-toned eyeshadow", "Pink or red lipstick", "Light foundation with pink undertones"] },
        'wedding': { style: "Elegant Classic", shade: "Neutral Tones", image: "💋", tips: ["Neutral brown eyeshadow", "Classic red lips", "Flawless base with cool undertones"] }
      },
      'medium': {
        'party': { style: "Warm Glam", shade: "Golden Tones", image: "✨", tips: ["Golden eyeshadow", "Warm berry lipstick", "Medium coverage foundation"] },
        'wedding': { style: "Sophisticated Look", shade: "Rose Gold", image: "💄", tips: ["Rose gold eyeshadow", "Mauve lipstick", "Warm-toned foundation"] }
      },
      'dark': {
        'party': { style: "Bold and Beautiful", shade: "Rich Colors", image: "💋", tips: ["Deep jewel-toned eyeshadow", "Bold red or purple lips", "Rich foundation with warm undertones"] },
        'wedding': { style: "Regal Elegance", shade: "Deep Tones", image: "✨", tips: ["Deep bronze eyeshadow", "Classic red lips", "Full coverage warm foundation"] }
      }
    };

    // Footwear based on comfort preference and occasion
    const footwearSuggestions = {
      'formal': {
        'wedding': { type: "Oxford Shoes", color: "Black", image: "👞", reason: "Classic formal shoes perfect for weddings" },
        'interview': { type: "Dress Shoes", color: "Brown", image: "👞", reason: "Professional footwear for business settings" }
      },
      'casual': {
        'casual outing': { type: "Sneakers", color: "White", image: "👟", reason: "Comfortable and versatile for everyday wear" },
        'party': { type: "Casual Loafers", color: "Black", image: "👞", reason: "Smart-casual footwear for relaxed parties" }
      }
    };

    // Jewelry based on style choice
    const jewelryOptions = {
      'modern': { style: "Minimalist", image: "💎", pieces: ["Simple chain necklace", "Stud earrings", "Sleek watch"] },
      'traditional': { style: "Classic Gold", image: "✨", pieces: ["Gold chain", "Traditional earrings", "Classic bracelet"] },
      'vintage': { style: "Antique Style", image: "💍", pieces: ["Vintage brooch", "Pearl earrings", "Antique watch"] }
    };

    // Season-based accessories
    const seasonalAccessories = {
      'summer': [
        { name: "Sunglasses", color: "Black", icon: "🕶️" },
        { name: "Light Scarf", color: "Pastel", icon: "🧣" },
        { name: "Canvas Bag", color: "Beige", icon: "👜" }
      ],
      'winter': [
        { name: "Wool Scarf", color: "Dark", icon: "🧣" },
        { name: "Leather Gloves", color: "Brown", icon: "🧤" },
        { name: "Winter Hat", color: "Grey", icon: "🎩" }
      ],
      'spring': [
        { name: "Light Jacket", color: "Pastel", icon: "🧥" },
        { name: "Floral Scarf", color: "Colorful", icon: "🧣" },
        { name: "Tote Bag", color: "Light", icon: "👜" }
      ],
      'fall': [
        { name: "Cardigan", color: "Earth Tones", icon: "🧥" },
        { name: "Warm Scarf", color: "Orange", icon: "🧣" },
        { name: "Leather Bag", color: "Brown", icon: "👜" }
      ]
    };

    // Get specific suggestions based on user input
    const outfit = outfitSuggestions[occasion]?.[styleChoice] ||
                  outfitSuggestions[occasion]?.['modern'] ||
                  { name: "Custom Style", color: "Navy", image: "👔", reason: "Tailored to your preferences" };

    const makeup = makeupSuggestions[skinTone]?.[occasion] ||
                  makeupSuggestions[skinTone]?.['party'] ||
                  { style: "Natural Look", shade: "Neutral", image: "💄", tips: ["Natural tones", "Light coverage", "Subtle colors"] };

    const footwear = footwearSuggestions[comfortPreference]?.[occasion] ||
                    footwearSuggestions['casual']?.['casual outing'] ||
                    { type: "Comfortable Shoes", color: "Black", image: "👞", reason: "Versatile and comfortable choice" };

    const jewelry = jewelryOptions[styleChoice] || jewelryOptions['modern'];

    const accessories = seasonalAccessories[season] || seasonalAccessories['spring'];

    return {
      outfit: { ...outfit, confidence: Math.floor(Math.random() * 10) + 85 },
      makeup,
      footwear,
      jewelry,
      accessories: { items: accessories }
    };
  };

  const suggestions = generateSuggestions();

  // Generate dynamic wardrobe suggestions based on user preferences
  const generateWardrobeSuggestions = () => {
    if (!formData) return [];

    const { occasion, styleChoice, season } = formData;

    const wardrobeItems = {
      'wedding': [
        {
          item: "Your formal jacket",
          suggestion: `Perfect for ${occasion} with dress pants`,
          missing: "Add a silk pocket square for extra sophistication"
        },
        {
          item: "Your dress shirt",
          suggestion: "Pair with a formal tie and cufflinks",
          missing: "Consider a classic watch to complete the look"
        }
      ],
      'party': [
        {
          item: "Your dark jeans",
          suggestion: "Great base for a smart-casual party look",
          missing: "Add a stylish blazer and dress shoes"
        },
        {
          item: "Your statement top",
          suggestion: "Perfect centerpiece for your party outfit",
          missing: "Pair with minimal jewelry to let the top shine"
        }
      ],
      'interview': [
        {
          item: "Your navy suit",
          suggestion: "Ideal for making a professional impression",
          missing: "Add conservative accessories and polished shoes"
        },
        {
          item: "Your white shirt",
          suggestion: "Classic choice for business interviews",
          missing: "Pair with a subtle tie and leather belt"
        }
      ],
      'casual outing': [
        {
          item: "Your comfortable sneakers",
          suggestion: "Perfect for a relaxed day out",
          missing: "Add casual joggers or jeans for comfort"
        },
        {
          item: "Your casual t-shirt",
          suggestion: "Great for everyday casual wear",
          missing: "Layer with a light jacket for style"
        }
      ]
    };

    const styleBasedSuggestions = {
      'modern': {
        item: "Your sleek accessories",
        suggestion: "Add contemporary pieces for a modern edge",
        missing: "Consider minimalist jewelry and clean lines"
      },
      'traditional': {
        item: "Your classic pieces",
        suggestion: "Stick to timeless combinations",
        missing: "Add traditional accessories like a classic watch"
      },
      'vintage': {
        item: "Your retro items",
        suggestion: "Mix vintage pieces with modern elements",
        missing: "Add antique-style accessories for authenticity"
      }
    };

    const seasonalSuggestions = {
      'summer': {
        item: "Your light fabrics",
        suggestion: "Perfect for warm weather styling",
        missing: "Add breathable accessories and light colors"
      },
      'winter': {
        item: "Your warm layers",
        suggestion: "Great for cold weather layering",
        missing: "Add warm accessories like scarves and gloves"
      }
    };

    let suggestions = wardrobeItems[occasion] || wardrobeItems['casual outing'];

    // Add style-based suggestion
    if (styleBasedSuggestions[styleChoice]) {
      suggestions.push(styleBasedSuggestions[styleChoice]);
    }

    // Add seasonal suggestion
    if (seasonalSuggestions[season]) {
      suggestions.push(seasonalSuggestions[season]);
    }

    return suggestions;
  };

  const wardrobeSuggestions = generateWardrobeSuggestions();

  if (!formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <Card className="max-w-md text-center">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4">No Data Found</h2>
            <p className="text-muted-foreground mb-6">
              It looks like you haven't filled out the suggestion form yet.
            </p>
            <Button asChild>
              <Link to="/suggestion-form">
                Get Fashion Suggestions
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Personalized Just for You
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Fashion
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Suggestions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your preferences for a <strong>{formData.occasion}</strong> occasion with your <strong>{formData.styleChoice}</strong> style
            {formData.skinTone && <span>, <strong>{formData.skinTone}</strong> skin tone</span>}
            {formData.season && <span>, and <strong>{formData.season}</strong> season</span>}
          </p>
        </div>

        {/* Main Suggestions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Outfit Suggestion */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="text-4xl">{suggestions.outfit.image}</div>
                <div>
                  <h3 className="text-xl">Perfect Outfit</h3>
                  <Badge variant="outline" className="mt-1">
                    {suggestions.outfit.confidence}% Match
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-lg mb-2">{suggestions.outfit.name}</h4>
              <p className="text-muted-foreground mb-4">{suggestions.outfit.reason}</p>
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Color: {suggestions.outfit.color}</span>
              </div>
            </CardContent>
          </Card>

          {/* Makeup Suggestion */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="text-4xl">{suggestions.makeup.image}</div>
                <div>
                  <h3 className="text-xl">Makeup Style</h3>
                  <p className="text-sm text-muted-foreground">{suggestions.makeup.shade}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-lg mb-3">{suggestions.makeup.style}</h4>
              <ul className="space-y-2">
                {suggestions.makeup.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Footwear Suggestion */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                                <Footprints className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl">Footwear</h3>
                  <p className="text-sm text-muted-foreground">{suggestions.footwear.color}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl mb-3">{suggestions.footwear.image}</div>
              <h4 className="font-semibold text-lg mb-2">{suggestions.footwear.type}</h4>
              <p className="text-muted-foreground text-sm">{suggestions.footwear.reason}</p>
            </CardContent>
          </Card>

          {/* Jewelry Suggestion */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl">Jewelry</h3>
                  <p className="text-sm text-muted-foreground">{suggestions.jewelry.style}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl mb-3">{suggestions.jewelry.image}</div>
              <ul className="space-y-2">
                {suggestions.jewelry.pieces.map((piece, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    <span>{piece}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Accessories Section */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              Accessories to Complete the Look
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suggestions.accessories.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.color}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* From Your Closet Section (if images were uploaded) */}
        {uploadedImages > 0 && (
          <Card className="border-none shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                From Your Closet
              </CardTitle>
              <CardDescription>
                Here's how to style your existing pieces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wardrobeSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">{suggestion.item}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{suggestion.suggestion}</p>
                    <p className="text-sm text-primary font-medium">💡 {suggestion.missing}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link to="/suggestion-form">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Try Again
            </Link>
          </Button>
          
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Get New Suggestions
          </Button>
          
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" />
            Share Look
          </Button>
          
          <Button asChild>
            <Link to="/wardrobe-analyzer">
              Analyze More Items
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
