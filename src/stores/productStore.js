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
}
const productStore = new ProductStore() // create instance
export default productStore; // export it 