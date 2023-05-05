import React from 'react';
import DashboardLayout from '../components/Shared/Layout/DashboardLayout';
import Statistics from '../components/Dashboard/Statistics';

const Stats = () => {
  return (
    <DashboardLayout page='Статистика' display='none'>
      <Statistics/>
    </DashboardLayout>
  )
}

export default Stats;