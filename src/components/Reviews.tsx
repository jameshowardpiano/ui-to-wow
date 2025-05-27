
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Wilson",
      rating: 5,
      text: "Excellent service! My piano sounds amazing after the tuning. The technician was professional and knowledgeable.",
      service: "Piano Tuning"
    },
    {
      name: "Mark Johnson", 
      rating: 5,
      text: "Quick and efficient repair work. My piano keys are working perfectly now. Highly recommend!",
      service: "Key Repair"
    },
    {
      name: "Lisa Chen",
      rating: 5,
      text: "Professional cleaning service that brought my old piano back to life. Outstanding work!",
      service: "Piano Cleaning"
    },
    {
      name: "David Miller",
      rating: 5,
      text: "The moving service was careful and precise. My piano arrived in perfect condition.",
      service: "Piano Moving"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Reviews from Satisfied Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
