import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { 
  Upload, 
  Camera, 
  X, 
  Sparkles, 
  ArrowRight,
  ImageIcon,
  Scan,
  Eye,
  Zap,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AnalysisForm {
  category: string;
  event: string;
  skinTone: string;
  style: string;
  season: string;
  notes: string;
}

const WardrobeAnalyzer = () => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisForm, setAnalysisForm] = useState<AnalysisForm>({
    category: '',
    event: '',
    skinTone: '',
    style: '',
    season: '',
    notes: ''
  });

  const categories = [
    'Dresses',
    'Tops',
    'Bottoms',
    'Outerwear',
    'Shoes',
    'Accessories',
    'Jewelry',
    'Bags',
    'Mixed Items'
  ];

  const events = [
    'Wedding',
    'Party',
    'Business Meeting',
    'Interview',
    'Casual Outing',
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

  const styles = [
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    // Create preview URLs
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    
    setUploadedImages(prev => [...prev, ...files]);
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
  };

  const removeImage = (index: number) => {
    // Revoke the object URL to prevent memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleFormChange = (field: keyof AnalysisForm, value: string) => {
    setAnalysisForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAnalyze = async () => {
    if (uploadedImages.length === 0) {
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Navigate to results with comprehensive analysis data
    navigate('/results', {
      state: {
        formData: {
          occasion: analysisForm.event || 'casual outing',
          skinTone: analysisForm.skinTone || 'medium',
          styleChoice: analysisForm.style || 'modern',
          season: analysisForm.season || 'spring',
          comfortPreference: 'casual',
          notes: analysisForm.notes,
          isWardrobeAnalysis: true,
          analysisCategory: analysisForm.category,
          hasImages: uploadedImages.length > 0,
          imageCount: uploadedImages.length,
          timestamp: new Date().toISOString()
        },
        uploadedImages: uploadedImages.length,
        categories: [analysisForm.category],
        analysisType: 'wardrobe'
      }
    });
  };

  const analysisSteps = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Photos",
      description: "Take clear photos of your clothing items in good lighting"
    },
    {
      icon: <Scan className="h-6 w-6" />,
      title: "AI Analysis",
      description: "Our AI identifies colors, patterns, and style elements"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Matching",
      description: "Get personalized outfit combinations and styling tips"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Wardrobe
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Analyzer
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload photos of your clothes and get AI-powered insights on how to style them perfectly
          </p>
        </div>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {analysisSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              Upload Your Wardrobe
            </CardTitle>
            <CardDescription>
              Upload multiple photos of your clothing items for comprehensive analysis
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
                id="wardrobe-upload"
              />
              <label htmlFor="wardrobe-upload" className="cursor-pointer">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Upload Wardrobe Photos</p>
                <p className="text-muted-foreground mb-4">
                  Drag and drop your images here, or click to browse
                </p>
                <Button type="button" variant="outline">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Choose Files
                </Button>
              </label>
            </div>

            {/* Photo Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Photography Tips</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-1">
                    <li>• Use natural lighting when possible</li>
                    <li>• Lay items flat or hang them properly</li>
                    <li>�� Capture the full item in the frame</li>
                    <li>• Take photos against a plain background</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Uploaded Images Preview */}
            {uploadedImages.length > 0 && (
              <div>
                <Label className="text-base font-medium">
                  Uploaded Images ({uploadedImages.length})
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                  {previewUrls.map((url, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                        <img
                          src={url}
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
                      <div className="absolute bottom-2 left-2">
                        <Badge variant="secondary" className="text-xs">
                          {uploadedImages[index].name.length > 10 
                            ? `${uploadedImages[index].name.substring(0, 10)}...`
                            : uploadedImages[index].name
                          }
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Analysis Preferences */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Analysis Preferences
            </CardTitle>
            <CardDescription>
              Help us provide more accurate styling suggestions
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category">Primary Category</Label>
              <Select onValueChange={(value) => handleFormChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="event">Target Event</Label>
              <Select onValueChange={(value) => handleFormChange('event', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event} value={event.toLowerCase()}>
                      {event}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skinTone">Your Skin Tone</Label>
              <Select onValueChange={(value) => handleFormChange('skinTone', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select skin tone" />
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
              <Label htmlFor="style">Preferred Style</Label>
              <Select onValueChange={(value) => handleFormChange('style', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select style preference" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((style) => (
                    <SelectItem key={style} value={style.toLowerCase()}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="season">Current Season</Label>
              <Select onValueChange={(value) => handleFormChange('season', value)}>
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

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                placeholder="Any specific styling goals or preferences?"
                value={analysisForm.notes}
                onChange={(e) => handleFormChange('notes', e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Analyze Button */}
        <div className="text-center mb-8">
          <Button 
            onClick={handleAnalyze}
            disabled={uploadedImages.length === 0 || isAnalyzing}
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
          >
            {isAnalyzing ? (
              <>
                <Zap className="mr-2 h-5 w-5 animate-pulse" />
                Analyzing Your Wardrobe...
              </>
            ) : (
              <>
                Analyze My Wardrobe
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          
          {uploadedImages.length === 0 && (
            <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Please upload at least one image to continue
            </p>
          )}
          
          {uploadedImages.length > 0 && !isAnalyzing && (
            <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              {uploadedImages.length} {uploadedImages.length === 1 ? 'image' : 'images'} ready for analysis
            </p>
          )}
        </div>

        {/* Benefits Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What You'll Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold mb-2">Color Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Discover which colors work best together
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👗</div>
                <h3 className="font-semibold mb-2">Outfit Ideas</h3>
                <p className="text-sm text-muted-foreground">
                  Get creative combinations from your existing pieces
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🛍️</div>
                <h3 className="font-semibold mb-2">Shopping Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Find out what's missing from your wardrobe
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="font-semibold mb-2">Style Upgrade</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to elevate your current pieces
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WardrobeAnalyzer;
