// auth.js
export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const signup = (username, password) => {
  const users = getUsers();
  const exists = users.find((u) => u.username === username);
  if (exists) return { success: false, message: "Username already exists" };
  users.push({ username, password });
  saveUsers(users);
  return { success: true };
};

export const login = (username, password) => {
  const users = getUsers();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    return { success: true };
  }
  return { success: false, message: "Invalid credentials" };
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"));
