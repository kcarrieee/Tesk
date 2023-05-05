import React from 'react';
import ProjectPage from '../components/Dashboard/Project/Project';
import DashboardLayout from '../components/Shared/Layout/DashboardLayout';

const SingleProject = () => {
  return (
    <DashboardLayout page='Проект'>
        <ProjectPage/>
    </DashboardLayout>
  )
}

export default SingleProject