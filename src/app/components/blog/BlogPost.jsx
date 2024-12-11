const BlogPost = ({ title, content }) => (
    <div>
        <h3 className="mil-up-font mil-mb-30">{title}</h3>
        {content.map((paragraph, index) => (
            <p key={index} className="mil-mb-30">{paragraph}</p>
        ))}
    </div>
);

export default BlogPost;