import { ProductCreateDto, ProductRequestDto } from "../dto/product";
import { client } from "./api";

export const getProducts = async (data: ProductRequestDto) => {
    const result = await client({
        method: "GET",
        url: "/product",
        params: data,
    });

    return result.data;
};

export const getProduct = async (id: string) => {
    const result = await client({
        method: "GET",
        url: `/product/${id}`,
    });

    return result.data;
};

export const createProduct = async (data: ProductCreateDto) => {
    const result = await client({
        method: "POST",
        url: `/product`,
        data,
    });

    return result.data;
};

export const deleteProduct = async (id: string) => {
    const result = await client({
        method: "DELETE",
        url: `/product/${id}`,
    });

    return result.data;
};
