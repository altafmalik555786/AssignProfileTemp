import { constRoute } from '../../utils/route'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from '@components/user-profile';

const Routing = () => {
  return (
    <>
      <Routes >
       <Route path={constRoute.dashboard} element={<UserProfile />} />
      </Routes>
    </>
  )
}
export default Routing