import formatPrice from "@/util/PriceFormate"
import { ProductType } from "@/types/ProductType"
import Link from "next/link"
import Image from "next/image"

export default function Product({ name, image, unit_amount, id, description, metadata }: ProductType) {
    const { features } = metadata
    return (
        <Link href={{ pathname: `/product/${id}`, query: { name, image, unit_amount, id, description, features } }}>
            <div className="text-gray-800  ">

                <Image src={image} alt="" width={800} height={800} className="w-full h-96 object-cover rounded-xl" />

                <div className=" font-bold py-2">
                    <h1 >{name}</h1>
                    <h2 className="text-sm text-teal-800">{unit_amount && formatPrice(unit_amount)}</h2>
                </div>
            </div>
        </Link>
    )
}