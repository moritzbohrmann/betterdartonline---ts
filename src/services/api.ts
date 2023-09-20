import axios from "axios";

const createApiInstance = (baseURL: string) =>
   axios.create({
      baseURL,
   });

export default createApiInstance;
