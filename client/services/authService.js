import $api from "../src/http";

export default class AuthService {
    static async login(email, password) {
        return await $api.post('/auth/signin', {email, password})
    }
    static async registration(email, password) {
        return await $api.post('/auth/signup', {email, password})
    }
    static async logout() {
        return await $api.post('/auth/logout')
    }
}