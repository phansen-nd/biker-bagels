type BasicTextProps = { text: string };

export default function BasicText({ text }: BasicTextProps ) {
    return (
        <p className="p-4">{text}</p>
      )
}