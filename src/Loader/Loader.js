import axios from "axios";

const Loader = async () => {
    const res = await axios.get("products.json");
    return res.data;
}

export default Loader;