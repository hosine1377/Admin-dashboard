import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import { productsData } from '../../../datas'
import PublishIcon from '@mui/icons-material/Publish'
import Chart from '../../../components/Chart/Chart'
import laptopImg from '../../../../public/images/1764447_248.jpg'
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContaienr">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButtom">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In Month" data={productsData} dataKey="sale" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={laptopImg} alt="" className="productInfoImg" />
            <span className="productName">Lenovo Laptop</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">Dell laptop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">45000</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>porduct Name</label>
            <input type="text" placeholder="Dell Laptop" />
            <label>In Stock</label>
            <select id="instock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>active</label>
            <select id="instock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img src={laptopImg} alt="" className="productUploaderImg" />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Uploade File ...</button>
          </div>
        </form>
      </div>
    </div>
  )
}
