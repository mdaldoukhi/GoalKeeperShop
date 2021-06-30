import { makeAutoObservable } from 'mobx';
import slugify from 'react-slugify';
import axios from "axios"

class ProductStore {
  /* Receive data array from the backend */
  gloves = [];
  constructor() {
    makeAutoObservable(this)
  }
  /* API define and get all arrays from it */
  fetchGloves = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gloves");
      this.gloves = response.data;
    } catch (error) {
      console.error("fetchGloves: ", error);
    }
  };
  /* Delete Product on the list */
  deletGloves = async (gloveID) => {
    try {
      await axios.delete(`http://localhost:8000/gloves/${gloveID}`);
      const updateGloves = this.gloves.filter((glove) => glove.id !== gloveID);
      this.gloves = updateGloves;
    } catch (error) {
      console.error(error)
    }
  };
  /* Add new Product on the list */
  createNew = async (newGloves) => {
    try {
      const response = await axios.post("http://localhost:8000/gloves", newGloves)
      this.gloves.push(response.data); // push the data from resonse to API
    } catch (error) {
      console.error(error) // error message 
    }
  }
  updateItem = async (updateItem) => {

    try {
      await axios.put(`http://localhost:8000/gloves/${updateItem.id}`, updateItem)
      const glove = this.gloves.find((cookie) => cookie.id === updateItem.id);
      glove.name = updateItem.name;
      glove.price = updateItem.price;
      glove.description = updateItem.description;
      glove.image = updateItem.image;
      glove.slug = slugify(updateItem.name);
    } catch (error) {
      console.error(error)
    }
  };
}
const productStore = new ProductStore() // create instance
productStore.fetchGloves();
export default productStore; // export it 