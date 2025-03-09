import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import FilterSection from './lead_mangement/FilterSection';
import LeadSection from './lead_mangement/LeadSection';
import LeadChart from './lead_mangement/LeadChart';

const App = () => {
  const [lastUpdate] = useState(new Date().toLocaleString());

  const leadData = {
    hot: {
      count: 24,
      leads: [
        { name: 'Sarah Johnson', company: 'TechCorp Solutions', engagement: 98 },
        { name: 'Michael Chen', company: 'HealthPlus Inc', engagement: 95 }
      ]
    },
    warm: {
      count: 45,
      leads: [
        { name: 'David Wilson', company: 'Finance Pro Ltd', engagement: 75 },
        { name: 'Emma Davis', company: 'Marketing Masters', engagement: 70 }
      ]
    },
    cold: {
      count: 67,
      leads: [
        { name: 'James Brown', company: 'Retail Solutions', engagement: 35 },
        { name: 'Lisa Anderson', company: 'Global Trade Co', engagement: 30 }
      ]
    }
  };

  const chartData = {
    hot: leadData.hot.count,
    warm: leadData.warm.count,
    cold: leadData.cold.count
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <img src="./src/assets/logo.jpg" alt="Logo" className="h-15 w-auto" />
            <h1 className="ml-4 text-xl font-semibold text-gray-900">Lead Management Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Last updated: {lastUpdate}</span>
            <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </nav>

        <div className="mt-8">
          <FilterSection />

          <div className="grid grid-cols-3 gap-6 mb-8">
            <LeadSection title="Hot Leads" count={leadData.hot.count} type="hot" leads={leadData.hot.leads} />
            <LeadSection title="Warm Leads" count={leadData.warm.count} type="warm" leads={leadData.warm.leads} />
            <LeadSection title="Cold Leads" count={leadData.cold.count} type="cold" leads={leadData.cold.leads} />
          </div>

          <LeadChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default App;