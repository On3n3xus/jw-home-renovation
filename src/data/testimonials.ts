export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  { id: "emily", quote: "Absolutely thrilled with our kitchen renovation. The team was professional, tidy, and delivered on time. Could not recommend them highly enough!", author: "Emily Carter", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" },
  { id: "james", quote: "From start to finish, the experience was seamless. They kept us informed every step of the way and the quality of work is outstanding.", author: "James Richardson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
  { id: "sophie", quote: "Our loft conversion has given us so much extra space. The design was thoughtful and the build quality is exceptional.", author: "Sophie Williams", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" },
  { id: "daniel", quote: "We had our entire ground floor remodeled and it looks incredible. They managed the project perfectly and stayed within budget.", author: "Daniel Foster", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" },
  { id: "charlotte", quote: "The bathroom renovation exceeded all our expectations. Beautiful tile work and attention to detail throughout. Highly recommend!", author: "Charlotte Harris", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face" },
  { id: "oliver", quote: "Fantastic work on our home extension. The team was respectful of our space and the finished result is absolutely stunning.", author: "Oliver Bennett", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" },
];
