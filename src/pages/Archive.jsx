import React from 'react';
import DashboardLayout from '../components/Shared/Layout/DashboardLayout';
import ArchivePage from '../components/Dashboard/ArchivePage';

const Archive = () => {
  return (
    <DashboardLayout page='Архив'>
      <ArchivePage/>
    </DashboardLayout>
  )
}

export default Archive;