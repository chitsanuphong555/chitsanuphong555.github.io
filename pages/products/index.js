import Link from "next/link";
function ProductList({ products }) {
  return (
    <>
      <h1>List of Products</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`product/${item.id}`}>
              <h2>
                {item.id} {item.title} {item.price}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
