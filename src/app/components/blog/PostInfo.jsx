import Image from "next/image";

const PostInfo = ({ author, date, readTime }) => (
    <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
        <li className="mil-post-author">
            <Image src={author.image} alt="Author" />
            <span>{author.name}</span>
        </li>
        <li>{date}</li>
        <li>{readTime}</li>
    </ul>
);

export default PostInfo;