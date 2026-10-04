import React from 'react';
import { Trophy, Code2, Flame, CheckCircle2, GitBranch, Award } from 'lucide-react';
import './Achievements.css';

const iconMap = {
  Code: Code2,
  Flame: Flame,
  CheckSquare: CheckCircle2,
  Trophy: Trophy,
  GitBranch: GitBranch
};

const Achievements = ({ achievementsData }) => {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Milestones &amp; Problem Solving</span>
          </div>
          <h2 className="section-title">
            Key <span>Achievements</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated consistency in algorithmic problem solving, active technical contributions, and competitive development.
          </p>
        </div>

        {/* Timeline / Card Layout */}
        <div className="achievements-timeline">
          {achievementsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <div key={item.id} className="achievement-timeline-item">
                <div className="timeline-spine">
                  <div className="timeline-node">
                    <span className="node-number">{index + 1}</span>
                  </div>
                  {index < achievementsData.length - 1 && <div className="timeline-connector" />}
                </div>

                <div className="achievement-card card">
                  <div className="achievement-card-header">
                    <div className="achievement-icon-box">
                      <IconComponent size={20} className="achievement-icon" />
                    </div>
                    <div className="achievement-title-wrap">
                      <span className="achievement-badge">{item.badge}</span>
                      <h3 className="achievement-heading">{item.title}</h3>
                    </div>
                  </div>

                  <p className="achievement-description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
