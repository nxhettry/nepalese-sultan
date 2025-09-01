import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function VisitSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 shadow-xs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
            Visit Our Shop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Located in the heart of Glenroy, we{"'"}re easy to find and always
            ready to serve you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-orange-50 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-orange-200 rounded-lg">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                Location & Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  Address
                </h3>
                <div className="pl-6 text-muted-foreground leading-relaxed">
                  <p className="font-medium">777 Pascoe Vale Road</p>
                  <p>Glenroy, VIC 3046</p>
                  <p>Australia</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-600" />
                  Opening Hours
                </h3>
                <div className="pl-6 space-y-2">
                  <div className="flex justify-between items-center py-1 border-b border-muted/50">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span className="font-medium text-foreground">
                      8:00 AM - 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-muted/50">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">
                      8:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  Contact Numbers
                </h3>
                <div className="pl-6 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start hover:bg-emerald-50 hover:border-emerald-200 transition-colors bg-white"
                  >
                    <a href="tel:0393805568" className="flex items-center hover:text-green-700">
                      <Phone className="mr-3 h-4 w-4 text-orange-600" />
                      <span className="font-medium ">(03) 9380 5568</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start hover:bg-emerald-50 hover:border-emerald-200 transition-colors bg-white"
                  >
                    <a href="tel:0433165150" className="flex items-center hover:text-green-700">
                      <Phone className="mr-3 h-4 w-4 text-orange-600" />
                      <span className="font-medium ">0433 165 150</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start hover:bg-emerald-50 hover:border-emerald-200 transition-colors bg-white"
                  >
                    <a href="tel:0431333640" className="flex items-center hover:text-green-700">
                      <Phone className="mr-3 h-4 w-4 text-orange-600" />
                      <span className="font-medium ">0431 333 640</span>
                    </a>
                  </Button>
                </div>
              </div>

              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 mt-6"
                asChild
              >
                <a
                  href="https://maps.google.com/?q=777+Pascoe+Vale+Road,+Glenroy+VIC+3046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-orange-200 rounded-lg">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                Find Us on the Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted border-2 border-muted">
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
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-sm text-emerald-700 text-center font-medium">
                  🚗 Easy parking available • 🚌 Public transport accessible
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
