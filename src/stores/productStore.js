import {makeAutoObservable} from 'mobx';
import slugify from 'react-slugify';
import axios from "axios"

class ProductStore {
    /* Receive data array from the backend */
    gloves = [];
    constructor(){
        makeAutoObservable(this)
    }
    fetchGloves = async () => {
        try {
          const response = await axios.get("http://localhost:8000/gloves");
          this.gloves = response.data;
        } catch (error) {
          console.error("fetchGloves: ", error);
        }
      };

    deletGloves = async (gloveID) => {
        try {
            await axios.delete(`http://localhost:8000/gloves/${gloveID}`);
            const updateGloves = this.gloves.filter((glove) => glove.id !== gloveID);
            this.gloves = updateGloves;
        } catch (error) {
            console.error(error)
        }
      };
    
    createNew = (newGloves) => {
        newGloves.id = this.gloves.length +1;
        newGloves.slug = slugify(newGloves.name);
        this.gloves.push(newGloves)
    }
    updateItem = (updateItem) => {
        const glove = this.gloves.find((cookie) => cookie.id === updateItem.id);
        glove.name = updateItem.name;
        glove.price = updateItem.price;
        glove.description = updateItem.description;
        glove.image = updateItem.image;
        glove.slug = slugify(updateItem.name);
      };
}
const productStore = new ProductStore() // create instance
productStore.fetchGloves();
export default productStore; // export it 