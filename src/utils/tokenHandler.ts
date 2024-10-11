import { decrypt, encrypt } from "./EncryptAndDecrypt";


const addTokenToLocalStorage = (token: string) => {
    // Encrypt the token using AES and the secret key
    // const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
    const encryptedData = encrypt(token);
    localStorage.setItem("authToken", encryptedData);
};

const getTokenFromLocalStorage = () => {
    // Ensure localStorage is only accessed on the client side
    if (typeof window !== 'undefined') {
        const encryptedToken = localStorage.getItem("authToken");

        if (encryptedToken) {
            const decryptedData = decrypt(encryptedToken);
            return decryptedData;
        }
    }
    
    return null; // Return null when localStorage is unavailable
};

export { addTokenToLocalStorage, getTokenFromLocalStorage };

