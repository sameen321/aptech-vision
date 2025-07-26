import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Headphones,
  Star,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'General Inquiry',
    'Style Consultation',
    'Technical Support',
    'Partnership',
    'Press & Media',
    'Billing Question',
    'Feature Request',
    'Feedback'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      content: "hello@fitfix.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      content: "123 Fashion Ave, Style City, SC 12345",
      description: "By appointment only"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Weekend support via email"
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Live Chat",
      description: "Get instant help from our fashion experts",
      action: "Start Chat",
      available: true
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Style Consultation",
      description: "Book a personal session with our stylists",
      action: "Book Session",
      available: true
    },
    {
      icon: <Headphones className="h-6 w-6 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our customer service team",
      action: "Call Now",
      available: true
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The FitFix team helped me completely transform my wardrobe. Their style advice is spot-on!",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Quick response times and really helpful suggestions. Love the personalized approach.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      text: "Best fashion app I've used. The customer support is amazing and really understands style.",
      rating: 5
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-16 flex items-center justify-center">
        <Card className="max-w-md text-center">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-muted-foreground mb-4">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <div className="animate-pulse text-sm text-muted-foreground">
              Redirecting back to form...
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about your style? Need help with our platform? Our fashion experts are here to help you look your best.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {option.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={!option.available}
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
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
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about how we can help you..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-sm font-medium text-primary">{info.content}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Customer Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle>What Our Customers Say</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">"{testimonial.text}"</p>
                    <p className="text-xs font-medium">- {testimonial.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium mb-1">Need instant answers?</p>
                    <p className="text-muted-foreground">Check our FAQ section for common questions about styling, uploads, and account management.</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Location */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Visit Our Style Studio</h2>
              <p className="text-muted-foreground">
                Located in the heart of the fashion district, our studio offers personalized styling sessions
              </p>
            </div>
            
            <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-lg font-medium">123 Fashion Avenue</p>
                <p className="text-muted-foreground">Style City, SC 12345</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
