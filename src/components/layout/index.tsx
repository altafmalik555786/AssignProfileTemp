import React from 'react';
import Routing from '../router-service'
import { observer } from 'mobx-react';
import MenuBar from '@components/menu-bar';

const DefaultLayout = observer(() => {


  return (
    <div>
      <MenuBar/>
      <Routing/>
    </div>
  );

})
export default DefaultLayout;
