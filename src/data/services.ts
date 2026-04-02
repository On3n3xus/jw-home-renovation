export type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "kitchens",
    name: "Kitchens",
    description: "Transform your kitchen into a stunning and functional space. From custom cabinetry to modern countertops, we handle every detail to create the heart of your home.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop",
  },
  {
    id: "loft-conversions",
    name: "Loft Conversions",
    description: "Maximize your living space with a beautifully designed loft conversion. We create bright, airy rooms that add real value to your property.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1000&fit=crop",
  },
  {
    id: "bathrooms",
    name: "Bathrooms",
    description: "Create your dream bathroom with our expert renovation services. From luxurious walk-in showers to elegant vanities, we bring your vision to life.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop",
  },
  {
    id: "extensions",
    name: "Extensions",
    description: "Expand your home with a seamless extension that blends perfectly with your existing architecture. More space for living, working, and entertaining.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
  },
  {
    id: "restorations",
    name: "Restorations",
    description: "Breathe new life into your property with our expert restoration services. We preserve character while updating functionality for modern living.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop",
  },
  {
    id: "external-works",
    name: "External Works",
    description: "Enhance your property's curb appeal with professional external works. From driveways and patios to landscaping and fencing, we do it all.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop",
  },
];
