import React from 'react';
import DashboardLayout from '../components/Shared/Layout/DashboardLayout';
import SavedProjects from '../components/Dashboard/SavedProjects';

const ImportantProjects = () => {
  return (
    <DashboardLayout page='Важные проекты'>
      <SavedProjects/>
    </DashboardLayout>
  )
}

export default ImportantProjects;