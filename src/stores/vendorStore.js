import { makeAutoObservable } from 'mobx';
import instance from "./instance";


class VendorStore {
  vendors = [];
  loading = true;
  constructor() {
    makeAutoObservable(this)
  }
  fetchVendors = async () => {
    try {
      const response = await instance.get("/shops");
      this.vendors = response.data;
      this.loading = false
    } catch (error) {
      console.error("fetchVendors: ", error);
    }
  };
  createNew = async (newVendors) => {
    try {
      const formData = new FormData();
      for (const key in newVendors) formData.append(key, newVendors[key])
      const response = await instance.post("/shops", formData)
      response.data.gloves = [];
      this.vendors.push(response.data); // push the data from resonse to API
    } catch (error) {
      console.error(error) // error message 
    }
  }
}
const vendorStore = new VendorStore() // create instance
vendorStore.fetchVendors();
export default vendorStore; // export it 