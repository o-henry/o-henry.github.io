import Project from "../components/project";
import { projects } from "../lib/getall.post";

function Index() {
  return (
    <>
      <div style={{ marginTop: "4rem", marginBottom: "8rem" }}>
        <header style={{ fontFamily: "Rajdhani", fontWeight: "600" }}>
          SOME THINGS I'VE BUILT
        </header>

        <section>
          {projects.map((post) => (
            <Project key={post.link} project={post} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Index;
