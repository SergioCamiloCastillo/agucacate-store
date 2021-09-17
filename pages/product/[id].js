import {useRouter} from "next/router";

export default function ProductItem() {
    const router=useRouter();
    const { value, color } = router.query;
    return (
        <div>
            <h1>Esta es la pagina del producto{value}</h1>
        </div>
    )
}
