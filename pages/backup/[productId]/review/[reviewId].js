import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query

  return (
    <>
      <h1>Product: {productId}</h1>
      <h1>Review: {reviewId}</h1>
    </>
  )
}

export default Comment