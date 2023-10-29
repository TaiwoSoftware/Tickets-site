import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium et
        nam deserunt beatae facilis eveniet mollitia nihil, maiores dicta
        laboriosam temporibus rerum recusandae velit consequuntur non distinctio
        asperiores quas sunt.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary"> View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          reiciendis veniam pariatur incidunt natus beatae reprehenderit minus
          tempore sint enim quo accusamus debitis, rerum ratione porro quas
          consectetur at asperiores!
        </p>
      </div>

      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          delectus voluptatibus temporibus debitis quis cupiditate optio
          doloremque, facilis ipsa nesciunt error voluptatum, harum deleniti.
          Modi illo iusto ad tempore consequatur?
        </p>
      </div>
    </main>
  );
}
