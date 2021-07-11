import { makeAutoObservable } from 'mobx';
import axios from "axios"

class VendorStore {
    constructor() {
        makeAutoObservable(this)
    }
    createUser = async (newUser) => {
        try {
          await axios.post("http://localhost:8000/signup", newUser)
        } catch (error) {
          console.error(error) // error message 
        }
      }
}
const vendorStore = new VendorStore() // create instance
export default vendorStore; // export it 