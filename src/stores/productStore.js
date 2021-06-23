import gloves from "../gloves";
import {makeAutoObservable} from 'mobx'

class ProductStore {
    gloves = gloves;
    constructor(){
        makeAutoObservable(this)
    }
    deletGloves = (gloveID) => {
        const updateGloves = this.gloves.filter((glove) => glove.id !== gloveID);
        this.gloves = updateGloves;
      };
}
const productStore = new ProductStore() // create instance
export default productStore; // export it 