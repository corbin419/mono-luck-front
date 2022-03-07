import Axios from "axios"
const axios = (baseURL) => {
const instance = Axios.create({
baseURL: process.env.backEndUrl, //back-end
headers: { 'Content-Type': 'application/json' },
timeout: 1000,
});
return instance;
}
export {axios};
export default axios();
