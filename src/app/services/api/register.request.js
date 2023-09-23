// import { apiService } from "../index";
import {apiService} from "../index"

/** getCategoriesListApi. The React-Query key is "getCategoriesListApi" */
export const RegisterApi = async (data) => {
  const payload = data ;
  console.log("Payload:=====", payload);
  const response = await apiService.post({
    url: "/hackathon/registration",
    payload,
  });
  return response;
};

/** getCategoriesListApi. The React-Query key is "getCategoriesListApi" */
export const getCategoriesListApi = async () => {
  const response = await apiService.get('/hackathon/categories-list');
  return response;
};






