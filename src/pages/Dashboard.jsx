import React from 'react';
import DashboardLayout from '../components/Shared/Layout/DashboardLayout';
import Main from '../components/Dashboard/Main/Main';

const Dashboard = () => {
  return (
    <DashboardLayout page='Проекты'>
      <Main/>
    </DashboardLayout>
  )
}

export default Dashboard;