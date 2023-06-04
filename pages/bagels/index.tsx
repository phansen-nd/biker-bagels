import BasicText from "@/components/basic-text";

interface Bagel {
    id: number;
    name: string;
}

export const bagels: Bagel[] = [
    { id: 1, name: "Poppy" },
    { id: 2, name: "Everything" },
    { id: 3, name: "Sesame" },
];

export default function Bagels() {
    return (
    <div>
        <BasicText text="List of bagels" />
        { bagels.map(bagel => 
            <li key={bagel.id}>{bagel.name}</li>
        )}
    </div>
    )
}