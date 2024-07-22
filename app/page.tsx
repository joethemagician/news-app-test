export default function Home() {
  return (
    <main>
      <h1 className="text-lg mb-5">News Headlines</h1>
      <ul>
          <li><a href="/headlines/gb">UK</a></li>
          <li><a href="/headlines/us">US</a></li>
          <li><a href="/headlines/fr">France</a></li>
          <li><a href="/headlines/au">Australia</a></li>
          <li><a href="/headlines/in">India</a></li>
      </ul>
    </main>
  );
}
