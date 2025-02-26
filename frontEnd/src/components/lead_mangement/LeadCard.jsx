import React from 'react';
import { Video, Mail, Phone, Flame, Sun, Snowflake } from 'lucide-react';

const iconMap = {
  hot: { icon: Flame, color: 'text-red-500' },
  warm: { icon: Sun, color: 'text-yellow-500' },
  cold: { icon: Snowflake, color: 'text-blue-500' }
};

const buttonMap = {
  hot: { text: 'Schedule Call', icon: Video, class: 'bg-red-600' },
  warm: { text: 'Send Email', icon: Mail, class: 'bg-yellow-600' },
  cold: { text: 'Follow Up', icon: Phone, class: 'bg-blue-600' }
};

const LeadCard = ({ name, company, engagement, type }) => {
  const Icon = iconMap[type].icon;
  const ButtonIcon = buttonMap[type].icon;

  return (
    <div className={`p-4 border rounded-lg border-${type === 'hot' ? 'red' : type === 'warm' ? 'yellow' : 'blue'}-200 bg-${type === 'hot' ? 'red' : type === 'warm' ? 'yellow' : 'blue'}-50`}>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
          <div className="mt-2 flex items-center">
            <Icon className={`${iconMap[type].color} mr-2 h-4 w-4`} />
            <span className={`text-sm text-${type === 'hot' ? 'red' : type === 'warm' ? 'yellow' : 'blue'}-600`}>
              {engagement}% Engagement
            </span>
          </div>
        </div>
        <button className={`rounded-lg ${buttonMap[type].class} text-white px-4 py-2 text-sm flex items-center`}>
          <ButtonIcon className="h-4 w-4 mr-2" />
          {buttonMap[type].text}
        </button>
      </div>
    </div>
  );
};

export default LeadCard;