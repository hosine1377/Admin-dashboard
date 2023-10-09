import React, { useState } from 'react'
import { userRows } from '../../datas'
// import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import './UsersList.css'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
export default function UsersList() {
  const [userDatas, setUserDatas] = useState(userRows)
  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id != userID))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" alt="" />
              {params.row.usernmae}
            </div>
          </Link>
        )
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transactions',
      headerName: 'transactionse',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/user/${params.row.id}`} className="link">
            <button className="userListEdit">Edite</button>
          </Link>
          <DeleteIcon
            className="userListDelete"
            onClick={() => userDelete(params.row.id)}
          />
        </>
      ),
    },
  ]
  return (
    <div className="userList">
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={userDatas}
          columns={columns}
          disableSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//   },
// ]

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ]

// export default function DataGridDemo() {
//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   )
// }
