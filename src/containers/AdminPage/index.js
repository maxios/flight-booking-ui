import React from 'react'

const AdminPage = props => {
  React.useEffect(() => {
    console.log('admin page loaded')
  } ,[])
  return (
    <div>
      {props.children}
    </div>
  )
}

export default AdminPage;
