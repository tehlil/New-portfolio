"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const efficiencyData = [
  { month: 'Jan', efficiency: 65, cost: 100 },
  { month: 'Feb', efficiency: 68, cost: 95 },
  { month: 'Mar', efficiency: 74, cost: 85 },
  { month: 'Apr', efficiency: 79, cost: 80 },
  { month: 'May', efficiency: 85, cost: 72 },
  { month: 'Jun', efficiency: 92, cost: 65 },
];

const deliveryData = [
  { sprint: 'S1', performance: 85 },
  { sprint: 'S2', performance: 88 },
  { sprint: 'S3', performance: 82 },
  { sprint: 'S4', performance: 95 },
  { sprint: 'S5', performance: 98 },
];

interface DashboardChartsProps {
  view: 'efficiency' | 'delivery';
}

export default function DashboardCharts({ view }: DashboardChartsProps) {
  if (view === 'efficiency') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={efficiencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-text-glow-primary)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="var(--color-text-glow-primary)" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="month" stroke="#737373" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#737373" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
          />
          <Area type="monotone" dataKey="efficiency" stroke="var(--color-text-glow-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorEfficiency)" />
          <Area type="monotone" dataKey="cost" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorCost)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={deliveryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
        <XAxis dataKey="sprint" stroke="#737373" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#737373" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
        />
        <Bar dataKey="performance" fill="var(--color-text-glow-secondary)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
