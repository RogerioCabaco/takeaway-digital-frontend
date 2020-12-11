export interface LoginDto {
    email: string,
    password: string
}
export interface TokenDto {
    tk: string
}
export interface UserByTokenDto {
    email: string,
    userName: string,
    userPhoto: string,
    exp: number,
    iat: number,
    nameid: string,
    nbf: number,
    role: string,
    unique_name: string
}