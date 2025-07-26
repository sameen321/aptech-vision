import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Construction, ArrowLeft, MessageCircle } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  features?: string[];
}

const PlaceholderPage = ({ title, description, features = [] }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center border-none shadow-lg">
          <CardHeader className="pb-8">
            <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
              <Construction className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold mb-4">
              {title}
            </CardTitle>
            <CardDescription className="text-lg">
              {description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {features.length > 0 && (
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-4 text-center">Coming Soon:</h3>
                <ul className="space-y-2 max-w-md mx-auto">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-muted/30 rounded-lg p-6">
              <MessageCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground mb-4">
                This page is currently under development. Our team is working hard to bring you amazing features!
              </p>
              <p className="text-sm text-muted-foreground">
                Want to see this page completed? Let us know what features are most important to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              
              <Button asChild>
                <Link to="/suggestion-form">
                  Get Fashion Suggestions
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceholderPage;
