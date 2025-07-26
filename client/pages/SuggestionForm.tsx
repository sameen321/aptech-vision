import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { 
  Upload, 
  Camera, 
  X, 
  Sparkles, 
  ArrowRight,
  ImageIcon
} from 'lucide-react';

interface FormData {
  occasion: string;
  skinTone: string;
  height: string;
  comfortPreference: string;
  styleChoice: string;
  season: string;
  notes: string;
}

const SuggestionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    occasion: '',
    skinTone: '',
    height: '',
    comfortPreference: '',
    styleChoice: '',
    season: '',
    notes: ''
  });
  
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const occasions = [
    'Wedding',
    'Party',
    'Interview',
    'Casual Outing',
    'Business Meeting',
    'Date Night',
    'Travel',
    'Sport/Gym',
    'Beach/Vacation',
    'Formal Event'
  ];

  const skinTones = [
    'Fair',
    'Light',
    'Medium',
    'Olive',
    'Dark',
    'Deep'
  ];

  const comfortPreferences = [
    'Casual',
    'Formal',
    'Traditional',
    'Semi-Formal',
    'Athletic'
  ];

  const styleChoices = [
    'Modern',
    'Traditional',
    'Sporty',
    'Bohemian',
    'Minimalist',
    'Vintage',
    'Trendy',
    'Classic'
  ];

  const seasons = [
    'Spring',
    'Summer',
    'Fall',
    'Winter'
  ];

  const wardrobeCategories = [
    'Dresses',
    'Tops',
    'Bottoms',
    'Shoes',
    'Jewelry',
    'Accessories',
    'Outerwear',
    'Bags'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form Data:', formData);
    console.log('Uploaded Images:', uploadedImages);
    console.log('Selected Categories:', selectedCategories);
    
    // Navigate to results page with enhanced data
    navigate('/results', {
      state: {
        formData: {
          ...formData,
          hasImages: uploadedImages.length > 0,
          imageCount: uploadedImages.length,
          selectedCategories: selectedCategories,
          timestamp: new Date().toISOString()
        },
        uploadedImages: uploadedImages.length,
        categories: selectedCategories
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get Your Personalized
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Fashion Suggestion
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your preferences and we'll create the perfect outfit recommendations just for you
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Personal Preferences
              </CardTitle>
              <CardDescription>
                Help us understand your style and the occasion
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="occasion">Event/Occasion *</Label>
                <Select onValueChange={(value) => handleInputChange('occasion', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    {occasions.map((occasion) => (
                      <SelectItem key={occasion} value={occasion.toLowerCase()}>
                        {occasion}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skinTone">Skin Tone *</Label>
                <Select onValueChange={(value) => handleInputChange('skinTone', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your skin tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {skinTones.map((tone) => (
                      <SelectItem key={tone} value={tone.toLowerCase()}>
                        {tone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  placeholder={"e.g., 5'6\", 170cm"}
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comfort">Comfort Preference *</Label>
                <Select onValueChange={(value) => handleInputChange('comfortPreference', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select comfort level" />
                  </SelectTrigger>
                  <SelectContent>
                    {comfortPreferences.map((pref) => (
                      <SelectItem key={pref} value={pref.toLowerCase()}>
                        {pref}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="style">Style Choice *</Label>
                <Select onValueChange={(value) => handleInputChange('styleChoice', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styleChoices.map((style) => (
                      <SelectItem key={style} value={style.toLowerCase()}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="season">Season *</Label>
                <Select onValueChange={(value) => handleInputChange('season', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    {seasons.map((season) => (
                      <SelectItem key={season} value={season.toLowerCase()}>
                        {season}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Wardrobe Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                Your Wardrobe
              </CardTitle>
              <CardDescription>
                Upload photos of your existing clothes for personalized suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Upload Wardrobe Images</p>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop your images here, or click to browse
                  </p>
                  <Button type="button" variant="outline">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Choose Files
                  </Button>
                </label>
              </div>

              {/* Uploaded Images */}
              {uploadedImages.length > 0 && (
                <div>
                  <Label>Uploaded Images ({uploadedImages.length})</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                    {uploadedImages.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div>
                <Label>Select Categories (Optional)</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {wardrobeCategories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategories.includes(category) ? "default" : "outline"}
                      className="cursor-pointer px-3 py-1"
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
              <CardDescription>
                Any specific preferences or requirements? Let us know!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., I prefer bright colors, need budget-friendly options, specific brand preferences..."
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              disabled={!formData.occasion || !formData.skinTone || !formData.comfortPreference || !formData.styleChoice || !formData.season}
            >
              Get Personalized Suggestion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              * Required fields
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuggestionForm;
