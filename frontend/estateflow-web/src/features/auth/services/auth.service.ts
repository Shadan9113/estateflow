
import type { LoginRequest, LoginResponse } from "../types/auth.types";
import { api } from "../../../api/axios";
import { storage } from "../../../utils/storage";

export const authService = {
    async login(data: LoginRequest) : Promise<LoginResponse>{
        const response  = await api.post<LoginResponse>("/auth/login", data)
        return response.data
    },

    logout() : void {
        storage.clearAuth();
    }
}