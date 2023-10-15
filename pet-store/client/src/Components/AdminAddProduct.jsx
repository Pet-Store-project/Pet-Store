import React, { useState, useEffect } from "react";
import axios from '../services/axios-interceptor';
import '../index.css';
import { useNavigate } from "react-router-dom";


const AdminAddProduct = ({ onAddProduct }) => {

  const navigate = useNavigate()


  const [product, setProduct] = useState({
    name: "",
    category: "",
    animal: "",
    imageUrl: "",
    description: "",
    price: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setProduct({ ...product, [name]: value });
    console.log(product)
  };

  const handleImage = (e) => {
    const file = e.target.files[0]
    setProduct({ ...product, imageUrl: file })

  }

  const addProduct = async (product) => {
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("animal", product.animal)
      formData.append("image", product.imageUrl)
      formData.append("description", product.description)
      formData.append("price", product.price)
      await axios.post("http://localhost:3000/api/product/admin", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate("/AdminProductList", window.location.reload());

    } catch (error) {

      if (error.response.status === 401) {
        localStorage.clear()
        navigate('/Login')
      }
      else if (error.response.status === 403) {
        navigate('/HomePage')
      }

    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    addProduct(product)



  }



  return (
    <div id="j" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <div className="flexx">
          <div className="form-group">

          <div className="coolinput">
            <label htmlFor="name" className="text">Product Name:</label>
            <input placeholder="Write here..." 
             className="input"

            <label htmlFor="name" className="method">Product Name:</label>
            <input

              type="text"
              id="name"
              name="name"
              placeholder="Product name..."
              className="form-control border-0 p-3 my-2"


              onChange={handleInputChange}
              required
            />
            </div>
          </div>
          <div className="form-group">
          <div className="coolinput">
            <label htmlFor="price" className="text">Price:</label>
            <input placeholder="Write here..."  
            className="input"
            type="number"
              id="price"
              name="price"

              onChange={handleInputChange}
              required
            />
            </div>
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="category" className="method">Category:</label>
            <select
              id="category"
              name="category"
              className="form-control"
              onChange={handleInputChange}
            >
              <option disabled selected value=''> Select product category </option>
              <option value="Food">Food</option>
              <option value="Toy">Toy</option>
              <option value="Upholstery">Upholstery</option>
            </select>
            <div className="form-group">
              <label htmlFor="animal" className="method">Animal:</label>
              <select
                id="animal"
                name="animal"
                className="form-control"

                onChange={handleInputChange}
              >
                <option disabled selected value=''> Select animal</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <div className="form-group">

            <div className="content">
                <span className="title">Upload a File</span>
                <p className="message">Select a file to upload from your computer or device.</p>
                <div className="actions">
                  <label htmlFor="imageUrl"  for="file"  className="button upload-btn" >
                  <div className="result file-uploaded">
                    <input
                      hidden=""
                      id="imageUrl file"
                      name="imageUrl"
                      type="file"
                      onChange={handleImage}
                    />
                  </div>
                  </label>
                

                </div>
               
              </div>
            </div>
          </div>
          <div className="form-group">
          <div className="coolinput">
            <label htmlFor="description" className="text" >Description:</label>

              <label htmlFor="imageUrl" className="method">Image:</label>
              <input

                type="file"
                id="imageUrl"
                name="imageUrl"

                onChange={handleImage}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="method">Description:</label>

            <textarea
            type="text"
            placeholder="Write here..." className="inputdescreotion"
              id="description"
              name="description"
              placeholder="Product description..."
              className="form-control-description"

              onChange={handleInputChange}
              required
            />
          </div>
          </div>
         
          <div className="form-group " >
            <input type="submit"  value='Add product' id="box"  />
          <div className="form-group">
            <label htmlFor="price" className="method">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Product price..."
              className="form-control border-0 p-2  "


              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" value='Add product' className="admin-submit-product-button" />

          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminAddProduct;