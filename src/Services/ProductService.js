import axios from "axios";

// Get all products
export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:2222/api/v1/products');
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
