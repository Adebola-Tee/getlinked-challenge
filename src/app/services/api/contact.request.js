// import { apiService } from "../index";
import {apiService} from "../index"

/** contactApi. The React-Query key is "ContactApi" */
export const ContactApi = async (data) => {
  console.log(data," this is a data=====")
  const payload = data ;
  const response = await apiService.post({
    url: '/hackathon/contact-form',
    payload,
  });
  return response;
};







