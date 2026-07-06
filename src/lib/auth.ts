const AUTH_STORAGE_KEY = "fastcast-auth";
const VALID_EMAIL = "admin@fastcast.ai";
const VALID_PASSWORD = "fastcast2026";

export function isAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const storedValue = window.localStorage.getItem(AUTH_STORAGE_KEY);

    if (!storedValue) {
      return false;
    }

    const parsedValue = JSON.parse(storedValue);

    return parsedValue?.isAuthenticated === true && parsedValue?.email === VALID_EMAIL;
  } catch {
    return false;
  }
}

export function signIn(email: string, password: string) {
  if (email.trim().toLowerCase() !== VALID_EMAIL || password !== VALID_PASSWORD) {
    return false;
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ email: VALID_EMAIL, isAuthenticated: true }),
    );
  }

  return true;
}

export function signOut() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}
