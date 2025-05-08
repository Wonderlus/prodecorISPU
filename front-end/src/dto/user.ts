export interface UserLoginDto {
    login: string;
    password: string;
}

export interface UserLoginResponseDto {
    id: string;
    token: string;
}

export interface UserDto extends UserLoginDto {
    id: string;
    first: string;
    last?: string;
    second?: string;
    phone?: string;
    news?: boolean;
}

export interface UserUpdateDto
    extends Omit<UserDto, "id" | "login" | "password"> {}

export interface UserRegisterDto extends Omit<UserDto, "id"> {}

export interface UserPasswordDto extends Omit<UserLoginDto, "login"> {
    password: string;
}
