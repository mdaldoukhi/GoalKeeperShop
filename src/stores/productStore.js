import { makeAutoObservable } from 'mobx';
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
      const formData = new FormData();
      for (const key in newGloves) formData.append(key, newGloves[key])
      const response = await axios.post("http://localhost:8000/gloves", formData)
      this.gloves.push(response.data); // push the data from resonse to API
    } catch (error) {
      console.error(error) // error message 
    }
  }
  updateItem = async (updateItem) => {

    try {
      const formData = new FormData();
      for (const key in updateItem) formData.append(key, updateItem[key])
      const res = await axios.put(`http://localhost:8000/gloves/${updateItem.id}`, formData)
      const glove = this.gloves.find((cookie) => cookie.id === res.data.id);
      for (const key in glove) glove[key] = res.data[key]
    } catch (error) {
      console.error(error)
    }
  };
}
const productStore = new ProductStore() // create instance
productStore.fetchGloves();
export default productStore; // export it 