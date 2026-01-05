import React, { useState } from "react";

// Dummy data
const dummyProducts = [
  {
    _id: "1",
    name: "Premium Steel Rod 12mm",
    company: "Steel Industries Ltd.",
    gstin: "GSTIN: 27AABCU9603R1ZM",
    verified: true,
    rating: 4.5,
    reviewCount: "248 reviews",
    prices: [
      { amount: 45000, label: "Ex factory rate" },
    //   { amount: 2250, label: "Transport" },
      { amount: "5% - (₹2362.50)", label: "Gst" },
      { amount: 4000, label: "Total Price" },
    ],
    delivery: {
      address: "123, Industrial Area, Phase 2",
      location: "Mumbai, Maharashtra 400001",
      nearBy: "Near City Mall, Behind Trade Center",
    },
    images: [
      "img_1.png",
      "img_2.png",
      "img_3.png",
      "img_4.png",
      "img_1.png",
      "img_2.png",
      "img_3.png",
    ],
    specifications: [
      { label: "Material Grade", value: "Fe 500D" },
      { label: "Diameter", value: "12mm" },
      { label: "Length", value: "12 meters" },
      { label: "Weight per piece", value: "10.68 kg" },
      { label: "Bundle size", value: "10 pieces" },
    ],
    technicalSpecs: [
      { label: "Tensile Strength", value: "545 N/mm²" },
      { label: "Yield Strength", value: "500 N/mm²" },
      { label: "Elongation", value: "14.5%" },
      { label: "Bend Test", value: "Pass" },
      { label: "Chemical Composition", value: "As per IS 1786" },
    ],
    reviews: [
      {
        rating: 4.8,
        author: "Rajesh Kumar",
        location: "Verified Purchase • 2 weeks ago",
        reviewCount: "156 reviews",
        images: 6,
      },
      {
        rating: 4.2,
        author: "Amit Sharma",
        location: "Verified Purchase • 1 month ago",
        reviewCount: "92 reviews",
        images: 6,
      },
    ],
  },
  {
    _id: "2",
    name: "Construction Cement 50kg",
    company: "BuildMat Corporation",
    gstin: "GSTIN: 29AABCU9603R1ZN",
    verified: true,
    rating: 4.3,
    reviewCount: "187 reviews",
    prices: [
      { amount: 380, label: "Ex factory rate" },
    //   { amount: 20, label: "Transport" },
      { amount: "5% - (₹20)", label: "Gst" },
      { amount: 420, label: "Total Price" },
    ],
    delivery: {
      address: "456, Construction Hub, Sector 5",
      location: "Delhi, NCR 110001",
      nearBy: "Near Highway Junction",
    },
    images: ["img1.jpg", "img2.jpg"],
    specifications: [
      { label: "Type", value: "OPC 53 Grade" },
      { label: "Weight", value: "50 kg" },
      { label: "Packaging", value: "HDPE Bag" },
      { label: "Shelf Life", value: "3 months" },
      { label: "Storage", value: "Dry place" },
    ],
    technicalSpecs: [
      { label: "Compressive Strength (3 days)", value: "27 MPa" },
      { label: "Compressive Strength (7 days)", value: "37 MPa" },
      { label: "Compressive Strength (28 days)", value: "53 MPa" },
      { label: "Fineness", value: "225 m²/kg" },
      { label: "Setting Time", value: "30-600 min" },
    ],
    reviews: [
      {
        rating: 4.5,
        author: "Suresh Patel",
        location: "Verified Purchase • 3 weeks ago",
        reviewCount: "67 reviews",
        images: 6,
      },
    ],
  },
  {
    _id: "3",
    name: "TMT Bar 16mm",
    company: "Iron & Steel Co.",
    gstin: "GSTIN: 27AABCU9603R1ZO",
    verified: true,
    rating: 4.7,
    reviewCount: "312 reviews",
    prices: [
      { amount: 65000, label: "Ex factory rate" },
    //   { amount: 3250, label: "Transport" },
      { amount: "5% - (₹3412.50)", label: "Gst" },
      { amount: 71662, label: "Total Price" },
    ],
    delivery: {
      address: "789, Steel Market, Zone A",
      location: "Bangalore, Karnataka 560001",
      nearBy: "Near Industrial Estate",
    },
    images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
    specifications: [
      { label: "Material Grade", value: "Fe 550D" },
      { label: "Diameter", value: "16mm" },
      { label: "Length", value: "12 meters" },
      { label: "Weight per piece", value: "18.96 kg" },
      { label: "Bundle size", value: "8 pieces" },
    ],
    technicalSpecs: [
      { label: "Tensile Strength", value: "600 N/mm²" },
      { label: "Yield Strength", value: "550 N/mm²" },
      { label: "Elongation", value: "16%" },
      { label: "Bend Test", value: "Pass" },
      { label: "Rib Pattern", value: "As per IS 1786" },
    ],
    reviews: [
      {
        rating: 4.9,
        author: "Vikram Singh",
        location: "Verified Purchase • 1 week ago",
        reviewCount: "203 reviews",
        images: 6,
      },
      {
        rating: 4.5,
        author: "Pradeep Reddy",
        location: "Verified Purchase • 2 weeks ago",
        reviewCount: "109 reviews",
        images: 6,
      },
    ],
  },
  {
    _id: "4",
    name: "Concrete Blocks 200mm",
    company: "Block Manufacturing Ltd.",
    gstin: "GSTIN: 27AABCU9603R1ZP",
    verified: true,
    rating: 4.6,
    reviewCount: "156 reviews",
    prices: [
      { amount: 25000, label: "Base Price" },
      { amount: 1250, label: "Transport" },
      { amount: "5% - (₹1312.50)", label: "Gst" },
      { amount: 27562, label: "Total Price" },
    ],
    delivery: {
      address: "321, Block Factory, Industrial Zone",
      location: "Chennai, Tamil Nadu 600001",
      nearBy: "Near Port Area",
    },
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
    specifications: [
      { label: "Size", value: "200mm x 200mm x 400mm" },
      { label: "Weight", value: "18 kg" },
      { label: "Compressive Strength", value: "4.0 N/mm²" },
      { label: "Water Absorption", value: "< 10%" },
      { label: "Density", value: "1800 kg/m³" },
    ],
    technicalSpecs: [
      { label: "Thermal Conductivity", value: "0.7 W/mK" },
      { label: "Fire Resistance", value: "4 hours" },
      { label: "Sound Insulation", value: "45 dB" },
      { label: "Durability", value: "50+ years" },
      { label: "Standard", value: "IS 2185 Part 1" },
    ],
    reviews: [
      {
        rating: 4.7,
        author: "Karthik Raman",
        location: "Verified Purchase • 1 week ago",
        reviewCount: "89 reviews",
        images: 6,
      },
    ],
  },
];

const ProductListing = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [products] = useState(dummyProducts);
  const [selectedProduct, setSelectedProduct] = useState(dummyProducts[0]);

  const selectProduct = (id) => {
    const product = products.find((p) => p._id === id);
    if (product) {
      setSelectedProduct(product);
      setSelectedImage(0);
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        // backgroundColor: '#f5f5f5',
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* LEFT COLUMN - Product Images */}
      <div
        style={{
          width: "90px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {products.slice(0, 4).map((product, index) => (
          <div
            key={product._id}
            onClick={() => selectProduct(product._id)}
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              border:
                selectedProduct._id === product._id
                  ? "2px solid #1976d2"
                  : "2px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`/img_${index + 1}.png`}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* MIDDLE COLUMN - Main Image and Reviews */}
      <div
        style={{
          flex: "0 0 550px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Main Image */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/hero_sec_img.png"
            alt={selectedProduct.name}
            style={{ width: "100%", height: "420px", objectFit: "cover",borderRadius:"8px" }}
          />
        </div>

        {/* Ratings and Reviews Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              paddingBottom: "12px",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: 0 }}>
              Ratings and reviews
            </h3>
            <span
              style={{ fontSize: "13px", color: "#666", cursor: "pointer" }}
            >
              ⭕ Ask question
            </span>
          </div>

          {selectedProduct.reviews.map((review, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: "24px",
                paddingBottom: "20px",
                borderBottom:
                  idx < selectedProduct.reviews.length - 1
                    ? "1px solid #e0e0e0"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    color: "#4caf50",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  ★ {review.rating}
                </span>
                <span style={{ fontSize: "12px", color: "#666" }}>
                  By 20+
                </span>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: "0 0 4px 0",
                    color: "#333",
                  }}
                >
                  {review.author}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  Idu changidhe thako bodhu
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: "8px",
                  height: "200px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "6px",
                    overflow: "hidden",
                    gridRow: "1 / 3",
                  }}
                >
                  <img
                    src="/hero_sec_img.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "#e0e0e0",
                      borderRadius: "6px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/hero_sec_img.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN - Product Details */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Product Info Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "12px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: "0 0 4px 0",
                }}
              >
                {selectedProduct.name}
              </h1>
              <p style={{ fontSize: "13px", color: "#666", margin: "2px 0" }}>
                {selectedProduct.company}
              </p>
              <p style={{ fontSize: "12px", color: "#999", margin: "2px 0" }}>
                {selectedProduct.gstin}
              </p>
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e0e0e0",
              margin: "16px 0",
            }}
          />

          {/* Prices */}
          <div
            style={{
              backgroundColor: "#fff9c4",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            {selectedProduct.prices.map((price, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom:
                    idx === selectedProduct.prices.length - 1 ? 0 : "10px",
                  fontSize: idx === 0 ? "18px" : "14px",
                  fontWeight: idx === 0 || idx === 3 ? "bold" : "normal",
                  color: "#333",
                }}
              >
                {price.label === "Gst" ? (
                  <>
                    <span style={{ fontSize: "14px", color: "#111" }}>
                      ₹ {price.amount}
                    </span>
                    <span style={{ fontSize: "14px", color: "#444" }}>Gst</span>
                  </>
                ) : (
                  <>
                    <span>
                      ₹{" "}
                      {typeof price.amount === "number"
                        ? price.amount.toLocaleString()
                        : price.amount}
                    </span>
                    <span style={{ fontSize: "12px", color: "#666" }}>
                      {price.label}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Quantity and Buttons */}
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#1e3a5f",
                borderRadius: "6px",
                overflow: "hidden",
                alignItems: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <button
                onClick={() => handleQuantityChange(-1)}
                style={{
                  border: "none",
                  background: "none",
                  color: "white",
                  padding: "10px 15px",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                −
              </button>
              <div
                style={{
                  backgroundColor: "white",
                  color: "#1A237E",
                  padding: "10px 15px",
                  fontWeight: "bold",
                }}
              >
                {quantity}
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                style={{
                  border: "none",
                  background: "none",
                  color: "white",
                  padding: "10px 15px",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e0e0e0",
              margin: "16px 0",
            }}
          />

          {/* Delivery Address */}
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                fontWeight: "bold",
                margin: "0 0 8px 0",
                fontSize: "14px",
                color: "#333",
              }}
            >
              Delivery address
            </h3>
            <p style={{ fontSize: "12px", color: "#999", margin: "4px 0" }}>
              {selectedProduct.delivery.address}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#333",
                margin: "6px 0",
                fontWeight: "500",
              }}
            >
              {selectedProduct.delivery.location}
            </p>
            <p style={{ fontSize: "13px", color: "#666", margin: "4px 0" }}>
              {selectedProduct.delivery.nearBy}
            </p>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#1976d2",
                fontSize: "13px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 0",
                marginTop: "6px",
                fontWeight: "500",
              }}
            >
              ✏️ Edit
            </button>
          </div>
        </div>

        {/* Actions Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <button
              style={{
                backgroundColor: "#1e3a5f",
                color: "white",
                padding: "12px 24px",
                borderRadius: "6px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Hide
            </button>
            
            <div style={{ textAlign: "riht" }}>
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "4px" }}>
                Explore More!
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#1976d2",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                View Categories →
              </div>
            </div>
          </div>
        </div>

        {/* Product Specification Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              margin: "0 0 12px 0",
            }}
          >
            Product Specification
          </h3>

          <div
            style={{
              backgroundColor: "#e8eaf6",
              padding: "10px",
              borderRadius: "4px",
              marginBottom: "12px",
              fontSize: "13px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Specification
          </div>

          <table
            style={{
              width: "100%",
              fontSize: "13px",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {selectedProduct.specifications.map((spec, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td
                    style={{
                      padding: "10px 12px 10px 0",
                      color: "#666",
                      width: "45%",
                    }}
                  >
                    {spec.label}
                  </td>
                  <td
                    style={{
                      padding: "10px 0",
                      color: "#333",
                      fontWeight: "500",
                    }}
                  >
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technical Specification Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              margin: "0 0 12px 0",
            }}
          >
            Technical Specification
          </h3>

          <div
            style={{
              backgroundColor: "#e8eaf6",
              padding: "10px",
              borderRadius: "4px",
              marginBottom: "12px",
              fontSize: "13px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Specification
          </div>

          <table
            style={{
              width: "100%",
              fontSize: "13px",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {selectedProduct.technicalSpecs.map((spec, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td
                    style={{
                      padding: "10px 12px 10px 0",
                      color: "#666",
                      width: "45%",
                    }}
                  >
                    {spec.label}
                  </td>
                  <td
                    style={{
                      padding: "10px 0",
                      color: "#333",
                      fontWeight: "500",
                    }}
                  >
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* NEW COLUMN - Verification and Rating (Far Right) */}
      <div
        style={{
          width: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "10px",
          paddingTop: "10px",
        }}
      >
        <div
          style={{
            height: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "8px",
          
          }}
        >
          <span
            style={{
              backgroundColor: "#1a5f3f",
              color: "white",
              fontSize: "9px",
              padding: "2px 6px",
              borderRadius: "3px",
              fontWeight: "bold",
            }}
          >
            ✓ Verified
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <span style={{ color: "#4caf50", fontSize: "12px" }}>★</span>
            <span style={{ fontSize: "11px", fontWeight: "bold" }}>
              {selectedProduct.rating}
            </span>
          </div>
          <span style={{ fontSize: "9px", color: "#666", textAlign: "center" }}>
            {selectedProduct.reviewCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
