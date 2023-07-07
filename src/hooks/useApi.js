/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 01/07/2023 - 09:57:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import axios from "axios";

const useAPI = () => {
  const BASE_URL = "https://fakestoreapi.com";

  const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  };

  return {
    getProducts,
  };
};

export default useAPI;