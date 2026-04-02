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
    image: "/images/kitchen_renovation.png",
  },
  {
    id: "loft-conversions",
    name: "Loft Conversions",
    description: "Maximize your living space with a beautifully designed loft conversion. We create bright, airy rooms that add real value to your property.",
    image: "/images/basement_conversion.png",
  },
  {
    id: "bathrooms",
    name: "Bathrooms",
    description: "Create your dream bathroom with our expert renovation services. From luxurious walk-in showers to elegant vanities, we bring your vision to life.",
    image: "/images/bathroom_remodel.png",
  },
  {
    id: "extensions",
    name: "Extensions",
    description: "Expand your home with a seamless extension that blends perfectly with your existing architecture. More space for living, working, and entertaining.",
    image: "/images/home_exterior.png",
  },
  {
    id: "restorations",
    name: "Restorations",
    description: "Breathe new life into your property with our expert restoration services. We preserve character while updating functionality for modern living.",
    image: "/images/living_room_remodel.png",
  },
  {
    id: "external-works",
    name: "External Works",
    description: "Enhance your property's curb appeal with professional external works. From driveways and patios to landscaping and fencing, we do it all.",
    image: "/images/outdoor_patio.png",
  },
];
