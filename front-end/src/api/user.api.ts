import { UserDto, UserPasswordDto, UserUpdateDto } from "../dto/user";
import { client } from "./api";

export const getUser = async (id: string) => {
    const result = await client({
        method: "GET",
        url: `/user/${id}`,
    });

    return result.data as UserDto;
};

export const updateUser = async (id: string, data: UserUpdateDto) => {
    const result = await client({
        method: "PUT",
        url: `/user/${id}`,
        data,
    });
    return result.data as UserDto;
};

export const deleteUser = async (id: string) => {
    const result = await client({
        method: "DELETE",
        url: `/user/${id}`,
    });

    return result.data;
};

export const updateUserPassword = async (id: string, data: UserPasswordDto) => {
    const result = await client({
        method: "PUT",
        url: `/user/${id}/change-password`,
        data,
    });

    return result.data;
};
