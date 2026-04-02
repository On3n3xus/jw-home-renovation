export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
  testimonial: { quote: string; author: string; avatar: string };
  variant: "light" | "dark" | "gray";
};

export const projects: Project[] = [
  {
    id: "modern-kitchen",
    title: "Modern kitchen refit",
    description: "A complete transformation of a dated kitchen into a sleek, modern cooking space with custom cabinetry, quartz countertops, and integrated appliances.",
    category: "Kitchen",
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop",
    testimonial: { quote: "JW Home Renovation transformed our kitchen beyond our expectations. The attention to detail was incredible and the team was professional throughout.", author: "Rachel Morgan", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" },
    variant: "light",
  },
  {
    id: "garden-path",
    title: "External garden path build",
    description: "A beautiful natural stone pathway winding through a redesigned garden, complete with integrated lighting and drainage solutions.",
    category: "External Works",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop",
    testimonial: { quote: "The garden path has completely transformed our outdoor space. It's both beautiful and practical — exactly what we wanted.", author: "Michael Turner", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
    variant: "dark",
  },
  {
    id: "bathroom-renovation",
    title: "Bathroom renovation",
    description: "A luxury bathroom renovation featuring a walk-in rainfall shower, freestanding tub, and heated floors with premium tile work throughout.",
    category: "Bathroom",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop",
    testimonial: { quote: "Our new bathroom feels like a five-star spa. The craftsmanship is outstanding and the project was delivered on time and on budget.", author: "Laura Davies", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" },
    variant: "gray",
  },
];
