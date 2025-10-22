import React, { useEffect, useState } from "react";
import { getProducts, saveProducts } from "./localstorage";
import "./admin.css";
const Admin = () => {
  const USERNAME = "admin";
  const PASSWORD = "1234";
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    isFeatured: false,
  });
  const [auth, setAuth] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  useEffect(() => {
    if (auth) {
      setProducts(getProducts());
    }
  }, [auth]);

  const handleLogin = () => {
    if (loginForm.username === USERNAME && loginForm.password === PASSWORD) {
      setAuth(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!auth) {
    return (
      <div className="admin-login">
        <h2>Login to Admin</h2>
        <input
          type="text"
          placeholder="Username"
          value={loginForm.username}
          onChange={(e) =>
            setLoginForm({ ...loginForm, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  const addProduct = () => {
    const updated = [...products, form];
    saveProducts(updated);
    setProducts(updated);
    setForm({ name: "", price: "", image: "", isFeatured: false });
  };

  const toggleFeatured = (index) => {
    const updated = [...products];
    updated[index].isFeatured = !updated[index].isFeatured;
    saveProducts(updated);
    setProducts(updated);
  };

  const deleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    saveProducts(updated);
    setProducts(updated);
  };
  return (
    <div>
      <h2>Admin</h2>
      <div className="form-row">
        <input
          type="text"
          placeholder="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="image"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={form.isFeatured}
            onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
          />
          Featured
        </label>
        <button className="add-product" onClick={addProduct}>
          add product
        </button>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            {product.image && (
              <div style={{ marginBottom: "0.5rem" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "150px",
                    height: "200px",
                    borderRadius: "6px",
                  }}
                />
              </div>
            )}
            <strong>{product.name}</strong> - ${product.price}
            {product.isFeatured && <span> 🌟 featured</span>}
            <button
              className="featured-button"
              onClick={() => toggleFeatured(index)}
            >
              toggle featured
            </button>
            <button
              className="delete-button"
              onClick={() => deleteProduct(index)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
