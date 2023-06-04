import { useRouter } from "next/router"
import { bagels } from "."
import BasicText from "@/components/basic-text"

export default function Bagel() {
    const router = useRouter()
    const { id } = router.query
    if (id) {
        const bagel = bagels.find(bagel => bagel.id === +id)
        return <p>This is the page for {bagel?.name}</p>
    } else {
        return BasicText({ text: "We couldn't find that bagel :/" });
    }
    
}