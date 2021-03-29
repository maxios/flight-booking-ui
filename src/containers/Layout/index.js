import React from 'react';
import Sidebar from '@/containers/Sidebar';

const Layout = props => {
  return (
    <div className="foobar__layout d-flex">
      <Sidebar/>
      {props.children}
    </div>
  )
}

export default Layout;
