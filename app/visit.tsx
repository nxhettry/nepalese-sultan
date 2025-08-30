import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function VisitSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Visit Our Shop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Located in the heart of Glenroy, we{"'"}re easy to find and always ready
            to serve you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Location & Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  777 Pascoe Vale Road
                  <br />
                  Glenroy, VIC 3046
                  <br />
                  Australia
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Opening Hours
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact Numbers
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start bg-transparent"
                  >
                    <a href="tel:0393805568">
                      <Phone className="mr-2 h-3 w-3" />
                      (03) 9380 5568
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start bg-transparent"
                  >
                    <a href="tel:0433165150">
                      <Phone className="mr-2 h-3 w-3" />
                      0433 165 150
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start bg-transparent"
                  >
                    <a href="tel:0431333640">
                      <Phone className="mr-2 h-3 w-3" />
                      0431 333 640
                    </a>
                  </Button>
                </div>
              </div>

              <Button className="w-full" asChild>
                <a
                  href="https://maps.google.com/?q=777+Pascoe+Vale+Road,+Glenroy+VIC+3046"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50">
            <CardHeader>
              <CardTitle>Find Us on the Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.123456789!2d144.9123456!3d-37.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s777%20Pascoe%20Vale%20Road%2C%20Glenroy%20VIC%203046!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nepalese Butcher Shop Location"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Easy parking available • Public transport accessible
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
