import gloves from "../gloves";
import {makeAutoObservable} from 'mobx';
import slugify from 'react-slugify';

class ProductStore {
    gloves = gloves;
    constructor(){
        makeAutoObservable(this)
    }

    deletGloves = (gloveID) => {
        const updateGloves = this.gloves.filter((glove) => glove.id !== gloveID);
        this.gloves = updateGloves;
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
export default productStore; // export it 