import { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function EvasiveNoButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasMovedOnce, setHasMovedOnce] = useState(false);

  const moveButton = () => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const container = button.parentElement;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate safe bounds (keep button fully visible)
    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;
    const minX = -maxX;
    const minY = -20;

    // Generate random position
    let newX = Math.random() * (maxX - minX) + minX;
    let newY = Math.random() * (maxY - minY) + minY;

    // Ensure button moves a minimum distance
    const minDistance = 100;
    const distance = Math.sqrt(
      Math.pow(newX - position.x, 2) + Math.pow(newY - position.y, 2)
    );

    if (distance < minDistance) {
      newX = position.x + (Math.random() > 0.5 ? minDistance : -minDistance);
      newY = position.y + (Math.random() > 0.5 ? minDistance : -minDistance);
    }

    // Clamp to bounds
    newX = Math.max(minX, Math.min(maxX, newX));
    newY = Math.max(minY, Math.min(maxY, newY));

    setPosition({ x: newX, y: newY });
    setHasMovedOnce(true);
  };

  const handlePointerEnter = () => {
    moveButton();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    moveButton();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Prevent default touch behavior
    const preventTouch = (e: TouchEvent) => {
      e.preventDefault();
    };

    button.addEventListener('touchstart', preventTouch, { passive: false });

    return () => {
      button.removeEventListener('touchstart', preventTouch);
    };
  }, []);

  return (
    <Button
      ref={buttonRef}
      size="lg"
      variant="outline"
      onPointerEnter={handlePointerEnter}
      onPointerDown={handlePointerDown}
      onTouchStart={handleTouchStart}
      className="bg-white hover:bg-white border-2 border-romantic-primary text-romantic-primary font-semibold text-xl px-12 py-6 rounded-full shadow-lg min-h-[56px] cursor-pointer touch-none select-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: hasMovedOnce ? 'transform 0.3s ease-out' : 'none',
        position: 'absolute',
        left: '50%',
        marginLeft: '-80px',
      }}
    >
      No 😢
    </Button>
  );
}
