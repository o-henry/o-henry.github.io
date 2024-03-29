import tinytime from "tinytime";

const postDateTemplate = tinytime("{MM} {DD}, {YYYY}");

function Metadata({ meta, project, blog }) {
    return (
        <>
            <h1 className={project || blog ? "great-title" : null}>
                {meta.title}
            </h1>
            <div className="details">
                {project || blog ? null : <p>{meta.description}</p>}
                <span className={project || blog ? "hide" : "date"}>
                    {postDateTemplate.render(new Date(meta.date))}
                </span>
                {/* <span className={project || blog ? "hide" : "date"}>
                    {meta.readTime + " min read"}
                </span> */}
            </div>
            <style jsx>
                {`
                    .hide {
                        display: none;
                    }
                    h1 {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: var(--color-header);
                        font-family: "Recoleta-bold";
                    }
                    .great-title {
                        margin-top: 2.5rem;
                        font-size: 3.125rem;
                        text-align: center;
                        color: var(--color-header);
                    }
                    .details span {
                        color: #bdbdbd;
                        margin-right: 1rem;
                    }
                    .details {
                        font-weight: 300;
                        margin-bottom: 2px;
                        font-size: 11pt;
                        line-height: 22pt;
                        letter-spacing: 0.8px;
                        font-family: "Poppins", NotoSansKR-Thin;
                    }
                    .date {
                        font-size: 15px;
                    }
                `}
            </style>
        </>
    );
}

export default Metadata;
