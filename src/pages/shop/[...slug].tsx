import { useRouter } from "next/router";

const ShopPage = () => {
    const { query } = useRouter();
    console.log(query);
    return (
        <div>
            <h1>Detail Product</h1>
            <p>Product: {query.slug}</p>
        </div>
    )
}

export default ShopPage;