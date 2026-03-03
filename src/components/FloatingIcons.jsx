import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaAngular,
  FaCss3Alt,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaGithubAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaNodeJs, color: "#68A063" },
  { Icon: SiExpress, color: "#999" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: FaVuejs, color: "#4FC08D" },
  { Icon: FaSass, color: "#CC6699" },
  { Icon: FaAngular, color: "#DD0031" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#333" },
  { Icon: FaGitAlt, color: "#F05032" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
];
const FloatingIcons = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const generatedItems = [];

    for (let i = 0; i < 25; i++) {
      const icon = icons[i % icons.length];

      generatedItems.push({
        id: i,
        Icon: icon.Icon,
        color: icon.color,
        x: Math.random() * 90,
        y: Math.random() * 90,
        size: 20 + Math.random() * 16,
        duration: 5 + Math.random() * 4,
        delay: Math.random() * -20,
        rotateZ: Math.random() * 360,
        shrunk: false,
      });
    }

    setItems(generatedItems);
  }, []);

  const handleEnter = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, shrunk: true } : item)),
    );
  }, []);

  const handleLeave = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, shrunk: false } : item)),
    );
  }, []);

  const handleClick = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, shrunk: !item.shrunk } : item,
      ),
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-100">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute pointer-events-auto cursor-pointer"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animation: `floatRandom ${item.duration}s ease-in-out ${item.delay}s infinite`,
            opacity: 0.7,
            transform: `rotateZ(${item.rotateZ}deg)`,
          }}
          onClick={() => handleClick(item.id)}
          onMouseEnter={() => handleEnter(item.id)}
          onMouseLeave={() => handleLeave(item.id)}
        >
          {/* Inner wrapper for scale */}
          <div
            className="transition-transform duration-300"
            style={{
              transform: item.shrunk ? "scale(0.3)" : "scale(1)",
            }}
          >
            <item.Icon
              size={item.size}
              color={item.color}
              style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
