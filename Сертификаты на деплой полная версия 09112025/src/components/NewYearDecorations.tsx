import React from 'react';
import { motion } from 'motion/react';
import { Snowflake, Sparkles } from 'lucide-react';

// ============================================
// КОМПОНЕНТ: Падающие снежинки
// ============================================
export const FallingSnowflakes = ({ 
  count = 30, 
  speed = 'normal' // 'slow' | 'normal' | 'fast'
}: { 
  count?: number;
  speed?: 'slow' | 'normal' | 'fast';
}) => {
  const speedMultiplier = speed === 'slow' ? 1.5 : speed === 'fast' ? 0.7 : 1;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const size = 12 + Math.random() * 12; // 12-24px
        const startX = Math.random() * 100;
        const duration = (10 + Math.random() * 10) * speedMultiplier;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute text-white/60"
            style={{
              left: `${startX}%`,
              top: -20,
            }}
            initial={{ 
              y: -20,
              rotate: 0,
              opacity: 0 
            }}
            animate={{ 
              y: '100vh',
              rotate: 360,
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'linear'
            }}
          >
            <Snowflake 
              style={{ 
                width: size, 
                height: size,
                filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))'
              }} 
            />
          </motion.div>
        );
      })}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: Новогодняя гирлянда (верхняя часть страницы)
// ============================================
export const ChristmasGarland = () => {
  const lights = [
    { color: 'bg-red-400', glow: 'shadow-red-400/50' },
    { color: 'bg-yellow-400', glow: 'shadow-yellow-400/50' },
    { color: 'bg-blue-400', glow: 'shadow-blue-400/50' },
    { color: 'bg-green-400', glow: 'shadow-green-400/50' },
    { color: 'bg-purple-400', glow: 'shadow-purple-400/50' },
    { color: 'bg-pink-400', glow: 'shadow-pink-400/50' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 pointer-events-none">
      {/* Garland String */}
      <svg 
        className="w-full h-16" 
        viewBox="0 0 1200 60" 
        preserveAspectRatio="none"
      >
        <path
          d="M 0,30 Q 100,10 200,30 T 400,30 T 600,30 T 800,30 T 1000,30 T 1200,30"
          stroke="#10b981"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Animated Lights */}
      <div className="absolute top-0 left-0 right-0 h-16 flex justify-around items-start px-4">
        {[...Array(20)].map((_, i) => {
          const light = lights[i % lights.length];
          const delay = i * 0.1;
          
          return (
            <motion.div
              key={i}
              className={`w-3 h-4 ${light.color} rounded-full shadow-lg ${light.glow}`}
              style={{
                marginTop: `${8 + (i % 2) * 8}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: Мерцающие звёздочки (для акцентов)
// ============================================
export const TwinklingStars = ({ count = 15 }: { count?: number }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {[...Array(count)].map((_, i) => {
        const size = 16 + Math.random() * 16;
        const top = Math.random() * 80;
        const left = Math.random() * 100;
        const duration = 2 + Math.random() * 2;
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${top}%`,
              left: `${left}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
          >
            <Sparkles 
              className="text-yellow-300" 
              style={{ 
                width: size, 
                height: size,
                filter: 'drop-shadow(0 0 4px rgba(253, 224, 71, 0.8))'
              }} 
            />
          </motion.div>
        );
      })}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: Снежный эффект (canvas-based, более реалистичный)
// Опциональный - более сложный, но красивее
// ============================================
export class SnowEffect extends React.Component {
  private canvasRef = React.createRef<HTMLCanvasElement>();
  private animationId: number | null = null;
  private snowflakes: Array<{
    x: number;
    y: number;
    radius: number;
    speed: number;
    wind: number;
  }> = [];

  componentDidMount() {
    this.initSnow();
    this.animate();
  }

  componentWillUnmount() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  initSnow = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      this.snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        wind: Math.random() * 0.5 - 0.25,
      });
    }
  };

  animate = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.snowflakes.forEach((flake) => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();

      flake.y += flake.speed;
      flake.x += flake.wind;

      if (flake.y > canvas.height) {
        flake.y = -10;
        flake.x = Math.random() * canvas.width;
      }

      if (flake.x > canvas.width) {
        flake.x = 0;
      } else if (flake.x < 0) {
        flake.x = canvas.width;
      }
    });

    this.animationId = requestAnimationFrame(this.animate);
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ opacity: 0.6 }}
      />
    );
  }
}

// ============================================
// КОМПОНЕНТ: Золотое конфетти (для акцентов CTA)
// ============================================
export const GoldenConfetti = ({ trigger = false }: { trigger?: boolean }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (trigger) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(50)].map((_, i) => {
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() - 0.5) * 40;
        const rotation = Math.random() * 720;
        const delay = Math.random() * 0.5;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${startX}%`,
              top: -20,
            }}
            initial={{ 
              y: -20,
              x: 0,
              rotate: 0,
              opacity: 1 
            }}
            animate={{ 
              y: '100vh',
              x: `${endX - startX}vw`,
              rotate: rotation,
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: 3,
              delay,
              ease: 'easeOut'
            }}
          >
            <div 
              className="w-2 h-3 bg-gradient-to-br from-yellow-400 to-amber-500"
              style={{
                boxShadow: '0 0 4px rgba(251, 191, 36, 0.8)'
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

// ============================================
// КОМПОНЕНТ: Праздничный бейдж "С Новым Годом!"
// Можно разместить в углу страницы
// ============================================
export const NewYearBadge = () => {
  return (
    <motion.div
      className="fixed top-20 right-6 z-30 pointer-events-auto"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5
      }}
    >
      <motion.div
        className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-white/30"
        animate={{
          boxShadow: [
            '0 0 20px rgba(239, 68, 68, 0.5)',
            '0 0 40px rgba(239, 68, 68, 0.8)',
            '0 0 20px rgba(239, 68, 68, 0.5)',
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="font-bold">🎄 С Новым Годом!</span>
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// READY-TO-USE PRESET: Полное новогоднее оформление
// ============================================
export const NewYearDecorationsPreset = ({ 
  includeSnow = true,
  includeGarland = true,
  includeStars = true,
  includeBadge = false,
  snowSpeed = 'normal' as 'slow' | 'normal' | 'fast'
}: {
  includeSnow?: boolean;
  includeGarland?: boolean;
  includeStars?: boolean;
  includeBadge?: boolean;
  snowSpeed?: 'slow' | 'normal' | 'fast';
}) => {
  return (
    <>
      {includeSnow && <FallingSnowflakes count={30} speed={snowSpeed} />}
      {includeGarland && <ChristmasGarland />}
      {includeStars && <TwinklingStars count={12} />}
      {includeBadge && <NewYearBadge />}
    </>
  );
};
