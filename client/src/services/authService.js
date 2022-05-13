import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return await $api.post('/auth/signin', {email, password})
    }
    static async registration({email, password, firstName, lastName, dob, gender, role, avatar}) {
        return await $api.post('/auth/signup', {email, password, firstName, lastName, dob, gender, role, avatar})
    }
    static async logout() {
        return await $api.post('/auth/logout')
    }
}