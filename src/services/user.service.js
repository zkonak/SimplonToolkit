import axios from 'axios';
const baseUrl = 'https://localhost:8080/user';


export const registerUser = async (user) => {
  const configurationObject = {
    method: 'post',
    url: `${baseUrl}`,
    data: user
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};


export const loginUser = async (user) => {
    const configurationObject = {
        method: 'post',
        url: `${baseUrl}`,
        data: user
      };
  const response = await axios.get(configurationObject);
  console.log(response.data);
};

