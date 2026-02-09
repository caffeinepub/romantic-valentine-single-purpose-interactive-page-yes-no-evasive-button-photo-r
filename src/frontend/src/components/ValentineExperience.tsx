import { useState } from 'react';
import { Heart } from 'lucide-react';
import EvasiveNoButton from './EvasiveNoButton';
import { Button } from './ui/button';

export default function ValentineExperience() {
  const [hasAccepted, setHasAccepted] = useState(false);

  if (hasAccepted) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <div className="flex justify-center gap-2 animate-bounce">
            <Heart className="w-8 h-8 fill-romantic-primary text-romantic-primary" />
            <Heart className="w-8 h-8 fill-romantic-primary text-romantic-primary" />
            <Heart className="w-8 h-8 fill-romantic-primary text-romantic-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-romantic-primary">
            Good choice
          </h1>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
          <img 
            src="/assets/Tamanna.jpeg" 
            alt="Tamanna" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-romantic-primary/20 to-transparent pointer-events-none" />
        </div>

        <div className="flex justify-center gap-2">
          <Heart className="w-6 h-6 fill-romantic-accent text-romantic-accent animate-pulse" />
          <Heart className="w-6 h-6 fill-romantic-accent text-romantic-accent animate-pulse delay-100" />
          <Heart className="w-6 h-6 fill-romantic-accent text-romantic-accent animate-pulse delay-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-romantic-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-romantic-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-romantic-primary/20">
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-2 animate-bounce">
            <Heart className="w-10 h-10 fill-romantic-primary text-romantic-primary" />
            <Heart className="w-12 h-12 fill-romantic-accent text-romantic-accent" />
            <Heart className="w-10 h-10 fill-romantic-primary text-romantic-primary" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-romantic-primary leading-tight">
              Will you be my Valentine, Tamanna?
            </h1>
          </div>

          <div className="relative h-32 flex items-center justify-center gap-6">
            <Button
              onClick={() => setHasAccepted(true)}
              size="lg"
              className="bg-romantic-primary hover:bg-romantic-primary/90 text-white font-semibold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[56px]"
            >
              Yes! 💕
            </Button>

            <EvasiveNoButton />
          </div>

          <div className="flex justify-center gap-1 opacity-60">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-4 h-4 fill-romantic-accent text-romantic-accent animate-pulse" 
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
