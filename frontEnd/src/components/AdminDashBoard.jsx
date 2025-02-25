import React from 'react';
import Sidebar from './admin_dashboard/Sidebar';
import Header from './admin_dashboard/Header';
import StatCard from './admin_dashboard/StatCard';
import Charts from './admin_dashboard/Charts';
import HotLeadsTable from './admin_dashboard/HotLeadsTable';

function AdminDashBoard() {
  const stats = [
    {
      icon: 'fa-home',
      title: 'Total Properties',
      value: '248',
      bgColor: 'bg-custom bg-opacity-10',
      iconColor: 'text-custom'
    },
    {
      icon: 'fa-list',
      title: 'Active Listings',
      value: '156',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'fa-handshake',
      title: 'Pending Deals',
      value: '12',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: 'fa-dollar-sign',
      title: 'Monthly Revenue',
      value: '$542,800',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="px-8 py-6">
          <Header />
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          <Charts />
          <HotLeadsTable />
        </div>
      </main>
    </div>
  );
}

export default AdminDashBoard;