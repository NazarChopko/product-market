'use client';

import React from 'react';
import AdminPage from '@/myPages/AdminPage';
import ProtectedRoute from '@/layouts/ProtectedRoute';

const AdminDashboard = () => {
  return (
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  );
};

export default AdminDashboard;
