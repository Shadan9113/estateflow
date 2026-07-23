
import type { LoginRequest, LoginResponse } from "../types/auth.types";
import { api } from "../../../api/axios";

export const authService = {
    async login(data: LoginRequest) : Promise<LoginResponse>{
        const response  = await api.post("/auth/login", data)
        return response.data
    }
}