import React, { useState } from 'react'
import { products } from '../../datas'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import './Products.css'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
export default function Products() {
  const [productsDatas, setProducts] = useState(products)
  const ProductsDelete = (ProductsID) => {
    setProducts(productsDatas.filter((user) => user.id != ProductsID))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" alt="" />
              {params.row.title}
            </div>
          </Link>
        )
      },
    },

    {
      field: 'price',
      headerName: 'price',
      width: 120,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/product/${params.row.id}`} className="link">
            <button className="userListEdit">Edite</button>
          </Link>
          <DeleteIcon
            className="userListDelete"
            onClick={() => ProductsDelete(params.row.id)}
          />
        </>
      ),
    },
  ]
  return (
    <div className="userList">
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={productsDatas}
          columns={columns}
          disableSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
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
