import axios from "axios";

const Post = async (endPoint, data) => {
  return await axios.post(endPoint, data);
};

const httpService = { Post };

export default httpService;
