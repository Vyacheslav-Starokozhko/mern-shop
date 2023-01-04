import axios from 'axios';

export const registration = async (email, password) => {
    console.log(password)
    try {
        const response = await axios.post("http://localhost:3000/api/auth/registration", {email, password})
        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
}