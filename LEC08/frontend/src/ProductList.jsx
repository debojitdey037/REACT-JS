import React from 'react'

function ProductList({ products }) {
  return (
    <>
      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
          padding: 32px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
        }

        .product-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }

        .product-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .product-brand {
          font-size: 0.85rem;
          font-weight: 600;
          color: #4f46e5;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .product-category {
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 500;
          color: #065f46;
          background: #d1fae5;
          padding: 4px 10px;
          border-radius: 999px;
          margin: 0;
          text-transform: capitalize;
        }

        .product-description {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #6b7280;
          margin: 0;
        }
      `}</style>

      <div className="product-grid">
        {products.map((element) => (
          <div className="product-card" key={element.id}>
            <p className="product-brand">{element.brand}</p>
            <h2 className="product-title">{element.title}</h2>
            <p className="product-category">{element.category}</p>
            <p className="product-description">{element.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList