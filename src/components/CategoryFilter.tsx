
import { Filter } from "lucide-react";

const categories = [
  "All",
  "Marketing",
  "Sales",
  "Customer Support",
  "Development",
  "Analytics",
];

export const CategoryFilter = () => {
  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-2 px-4 md:px-0">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Filter className="w-4 h-4" />
        <span>Filter:</span>
      </div>
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors text-sm whitespace-nowrap"
        >
          {category}
        </button>
      ))}
    </div>
  );
};
