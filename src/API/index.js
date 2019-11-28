import axios from "axios";

const Api = {
  fetchData: () => {
    const url = "https://vaithees67.github.io/form.json";
    return axios.get(url);
  }
};

export default Api;