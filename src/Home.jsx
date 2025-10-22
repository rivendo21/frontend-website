import { useState, useEffect } from "react";
import { getProducts, getCart, saveCart } from "./localstorage";
import "./admin.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./footer.css";
import "swiper/css";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
    setCart(getCart());
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    saveCart(updatedCart);
    window.dispatchEvent(new Event("storage"));
  };
  const featuredProducts = products.filter((p) => p.isFeatured);
  const regularProducts = products.filter((p) => !p.isFeatured);

  return (
    <div>
      <h2 className="main-text">Our Products</h2>
      <div className="promo-banner">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          modules={[Autoplay]} // ✅ must be an array
        >
          {[
            {
              image: "/header_macbook_image.png",
              title: "Big Sale!",
              description: "Up to 50% off on selected items.",
            },
            {
              image: "/header_headphone_image.png",
              title: "New Arrivals",
              description: "Check out our latest collection.",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="banner-slide">
                <div className="banner-text">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="banner-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {featuredProducts.length > 0 && (
        <>
          <div class="marquee-container">
            <div class="marquee-track">
              <button class="marquee-button">Headphones</button>
              <button class="marquee-button">Speakers</button>
              <button class="marquee-button">Watch</button>
              <button class="marquee-button">Earbuds</button>
              <button class="marquee-button">Mouse</button>
              <button class="marquee-button">Decoration</button>
              <button class="marquee-button">Headphones</button>
              <button class="marquee-button">Speakers</button>
              <button class="marquee-button">Watch</button>
              <button class="marquee-button">Earbuds</button>
              <button class="marquee-button">Mouse</button>
              <button class="marquee-button">Decoration</button>
              <button class="marquee-button">Headphones</button>
              <button class="marquee-button">Speakers</button>
              <button class="marquee-button">Watch</button>
              <button class="marquee-button">Earbuds</button>
              <button class="marquee-button">Mouse</button>
              <button class="marquee-button">Decoration</button>
              <button class="marquee-button">Headphones</button>
              <button class="marquee-button">Speakers</button>
              <button class="marquee-button">Watch</button>
              <button class="marquee-button">Earbuds</button>
              <button class="marquee-button">Mouse</button>
              <button class="marquee-button">Decoration</button>
              <button class="marquee-button">Headphones</button>
              <button class="marquee-button">Speakers</button>
              <button class="marquee-button">Watch</button>
              <button class="marquee-button">Earbuds</button>
              <button class="marquee-button">Mouse</button>
              <button class="marquee-button">Decoration</button>
              <button class="marquee-button">Headphones</button>
              <button class="marquee-button">Speakers</button>
              <button class="marquee-button">Watch</button>
              <button class="marquee-button">Earbuds</button>
              <button class="marquee-button">Mouse</button>
              <button class="marquee-button">Decoration</button>
            </div>
          </div>
          <div className="featured-text">
            <h3 className="section-title">
              {" "}
              Featured <span className="span-text"> Products</span>
            </h3>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <div className="product-card" key={`featured-${index}`}>
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
                <span>🌟 Featured</span>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="featured-text">
        <h3 className="section-title">
          {" "}
          All <span className="span-text">Products</span>
        </h3>
      </div>

      {regularProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {regularProducts.map((product, index) => (
            <div className="product-card" key={`regular-${index}`}>
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
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <div class="support-card">
        <h3 class="support-title">24/7 Customer Support</h3>
        <p class="support-description">
          We're here for you. Get expert help with our customer support.
        </p>
        <div class="support-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
            <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
          </svg>
        </div>
      </div>
      <div class="footer">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <span class="logo-green">go</span>cart
            <span class="logo-dot">.</span>
          </a>
          <p class="footer-description">
            Welcome to gocart, your ultimate destination for the latest and
            smartest gadgets. From smartphones and smartwatches to essential
            accessories, we bring you the best in innovation — all in one place.
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h3>PRODUCTS</h3>
            <ul>
              <li>
                <a href="/">Earphones</a>
              </li>
              <li>
                <a href="/">Headphones</a>
              </li>
              <li>
                <a href="/">Smartphones</a>
              </li>
              <li>
                <a href="/">Laptops</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>WEBSITE?</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/create-store">Create Your Store</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>CONTACT</h3>
            <ul>
              <li>
                <a href="/">+1-212-456-7890</a>
              </li>
              <li>
                <a href="/">contact@example.com</a>
              </li>
              <li>
                <a href="/">794 Francisco, 94102</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
