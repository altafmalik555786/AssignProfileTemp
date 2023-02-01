import { constRoute } from '../../utils/route'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoard from '@components/dashboard';
import UserProfile from '@components/user-profile';

const Routing = () => {
  return (
    <>
      <Routes >
        <Route path={constRoute.dashboard} element={<DashBoard />}  />
        <Route path={constRoute.userProfile} element={<UserProfile />} />
      </Routes>
    </>
  )
}
export default Routing