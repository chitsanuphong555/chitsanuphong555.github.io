import { useRouter} from "next/router"

function Doc() {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)
    if (params.lenght === 2) {
        return  <h1>Viewing docs for feature {parems[0]} and concept {params[0]}</h1>
    } else if (params.length === 1) {
        return <h1>Viewing docs for feature {params[0]} </h1>
    }
  return <h1>Docs Home page</h1>;
}
export default Doc;
