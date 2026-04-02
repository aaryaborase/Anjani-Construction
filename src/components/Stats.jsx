import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// 🔥 Custom Hook for Counter
function useCounter(end, duration = 2000, startAnimation) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration, startAnimation]);

  return count;
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 0, suffix: " Issues", label: "Safety Record" },
  ];

  return (
    <section className="bg-secondary py-20">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((item, index) => {
          const count = useCounter(item.value, 2000, inView);

          return (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-bold text-accent">
                {count}
                {item.suffix}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
