interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-blue-600 to-blue-700
            px-4 text-white py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}