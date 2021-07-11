import { makeAutoObservable } from 'mobx';
import axios from "axios"

class VendorStore {
    vendors = [];
    constructor() {
        makeAutoObservable(this)
    }
    fetchVendors = async () => {
        try {
          const response = await axios.get("http://localhost:8000/shops");
          this.vendors = response.data;
        } catch (error) {
          console.error("fetchVendors: ", error);
        }
      };
    createNew = async (newVendors) => {
        try {
          const formData = new FormData();
          for (const key in newVendors) formData.append(key, newVendors[key])
          const response = await axios.post("http://localhost:8000/shops", formData)
          this.vendors.push(response.data); // push the data from resonse to API
        } catch (error) {
          console.error(error) // error message 
        }
      }
}
const vendorStore = new VendorStore() // create instance
vendorStore.fetchVendors();
export default vendorStore; // export it 