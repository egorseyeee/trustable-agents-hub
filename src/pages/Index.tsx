
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { AgentCard } from "@/components/AgentCard";

const featuredAgents = [
  {
    title: "Marketing Assistant Pro",
    description: "AI-powered marketing campaign optimization and content generation",
    rating: 4.8,
    price: "$49/mo",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "Marketing"
  },
  {
    title: "Sales Navigator AI",
    description: "Automated lead generation and sales pipeline management",
    rating: 4.9,
    price: "$79/mo",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    category: "Sales"
  },
  {
    title: "Support Desk AI",
    description: "24/7 customer support automation with natural language processing",
    rating: 4.7,
    price: "$59/mo",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Customer Support"
  },
  {
    title: "DevOps Assistant",
    description: "Streamline your development workflow with AI-powered automation",
    rating: 4.9,
    price: "$99/mo",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Development"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight fade-in">
            Discover AI Agents for Your Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in animation-delay-100">
            Find and deploy powerful AI solutions that streamline your operations and boost productivity
          </p>
          <div className="pt-8 fade-in animation-delay-200">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="space-y-8">
          <CategoryFilter />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredAgents.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>

          {/* Support Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to assist you in finding the perfect AI solution
            </p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
