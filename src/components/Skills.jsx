import React, { useState } from 'react';
import {
  Code2,
  Brain,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import './Skills.css';

const iconMap = {
  programming: Code2,
  'ai-ml': Brain,
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
  other: Sparkles
};

const Skills = ({ skillsData }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span>Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, enterprise backend technologies, AI/ML concepts, and developer tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-bar">
          <button
            className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Skills
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.id}
              className={`filter-chip ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group) => {
            const IconComponent = iconMap[group.id] || Code2;
            return (
              <div key={group.id} className="skill-category-card card">
                <div className="category-header">
                  <div className="category-icon-box">
                    <IconComponent size={20} className="category-icon" />
                  </div>
                  <div>
                    <h3 className="category-title">{group.category}</h3>
                    <span className="skills-count">{group.skills.length} skills</span>
                  </div>
                </div>

                <div className="skills-tags-wrap">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-chip">
                      <span className="skill-chip-dot" />
                      <span className="skill-chip-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
