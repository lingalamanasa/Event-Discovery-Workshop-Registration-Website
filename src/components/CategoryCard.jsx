import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Palette, Briefcase, GraduationCap, Megaphone, Camera, HeartPulse, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const iconMap = {
  Cpu,
  Palette,
  Briefcase,
  GraduationCap,
  Megaphone,
  Camera,
  HeartPulse
};

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const IconComponent = iconMap[category.icon] || Cpu;

  const handleClick = () => {
    navigate(`/events?category=${encodeURIComponent(category.name)}`);
  };

  return (
    <TiltCard maxTilt={10} perspective={1000}>
      <div className="category-card" onClick={handleClick} role="button" tabIndex={0}>
        <div className="category-card-media">
          <img src={category.image} alt={category.name} className="category-card-img" loading="lazy" />
          <div className="category-card-overlay" />
          <span className="category-badge-count">{category.count} {category.count === 1 ? 'Event' : 'Events'}</span>
          <div className="category-icon-floating" style={{ background: category.color }}>
            <IconComponent size={18} />
          </div>
        </div>

        <div className="category-card-info">
          <h3 className="category-name">{category.name}</h3>
          <p className="category-desc">{category.description}</p>

          <div className="category-arrow" style={{ color: category.color }}>
            <span>Explore Track</span>
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default CategoryCard;
