export default function Metadata({ meta, post }) {
  return (
    <>
      <h1 className={post ? "great-title" : null}>{meta.title}</h1>
      <div className="details">
        {post ? null : <p>{meta.description}</p>}
        <span>{meta.date}</span>
        <span role="img" aria-label="one coffee">
          {meta.readTime + " min read"}
        </span>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f39c12;
          }
          .great-title {
            font-size: 2rem;
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
}
