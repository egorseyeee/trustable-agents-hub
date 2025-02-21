
import { Star } from "lucide-react";

interface AgentCardProps {
  title: string;
  description: string;
  rating: number;
  price: string;
  image: string;
  category: string;
}

export const AgentCard = ({ title, description, rating, price, image, category }: AgentCardProps) => {
  return (
    <div className="agent-card hover-scale group">
      <div className="relative aspect-video mb-4 rounded-md overflow-hidden bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg leading-tight">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="pt-2 flex items-center justify-between">
          <span className="font-semibold">{price}</span>
          <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
            Try Demo
          </button>
        </div>
      </div>
    </div>
  );
};
