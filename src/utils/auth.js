const STORAGE_AUTH_KEY = "token";

export function saveToken(token) {
  console.log("Setting token in local storage...");
  localStorage.setItem(STORAGE_AUTH_KEY, token);
}

export function getToken() {
  console.log("Getting token from local storage...");
  return localStorage.getItem(STORAGE_AUTH_KEY);
}

export function cleanToken() {
  console.log("Ckeaning token from local storage...");
  localStorage.removeItem(STORAGE_AUTH_KEY);
}

export function isTokenValid(token = getToken()) {
  console.log("Validating Token Expiration...");
  if (!token) {
    return false;
  }
  try {
    const decodedToken = jwtDecode(token);
    console.log("Decoded Token: ", decodedToken);
    return Data.now() < decodedToken.exp * 1000;
  } catch {
    return false;
  }
}
