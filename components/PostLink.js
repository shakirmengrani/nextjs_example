import Link from 'next/link';

export default function PostLink(props) {
    return (
        <li>
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}