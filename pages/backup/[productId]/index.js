import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <div className="custom-box-hero">
        <h1>Product List: {productId}</h1>
        <span className="custom-content-hero">Past is something that you can’t let go.</span> 
      </div>
    </>
  );
}
