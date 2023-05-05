import React from 'react';
import DashboardLayout from '../components/Shared/Layout/DashboardLayout';
import AddProjectPage from '../components/Dashboard/AddProject/AddProjectPage';


const AddProject = () => {
	
  return (
    <DashboardLayout page='Новый проект'>
		<AddProjectPage/>
    </DashboardLayout>
  )
}

export default AddProject;