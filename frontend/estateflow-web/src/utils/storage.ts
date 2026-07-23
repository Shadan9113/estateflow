import type { LoginResponse } from "../features/auth/types/auth.types";

const AUTH_KEY = "estateflow_auth";

export const storage = {
    saveAuth(auth : LoginResponse) : void {
        localStorage.setItem(AUTH_KEY, JSON.stringify(auth))
    },

    getAuth() : LoginResponse | null {
        const auth = localStorage.getItem(AUTH_KEY)

        if(!auth){
            return null
        }
        return JSON.parse(auth) as LoginResponse
    },

    clearAuth() : void {
        localStorage.removeItem(AUTH_KEY)
    },

    isAuthenticated() : boolean {
       return  this.getAuth() != null;
    }
}