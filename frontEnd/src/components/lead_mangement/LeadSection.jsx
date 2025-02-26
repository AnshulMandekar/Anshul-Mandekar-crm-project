import React from 'react';
import LeadCard from './LeadCard';

const LeadSection = ({ title, count, type, leads }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-medium text-${type === 'hot' ? 'red' : type === 'warm' ? 'yellow' : 'blue'}-600`}>
          {title}
        </h3>
        <span className={`text-2xl font-bold text-${type === 'hot' ? 'red' : type === 'warm' ? 'yellow' : 'blue'}-600`}>
          {count}
        </span>
      </div>
      <div className="space-y-4">
        {leads.map((lead, index) => (
          <LeadCard key={index} {...lead} type={type} />
        ))}
      </div>
    </div>
  );
};

export default LeadSection;