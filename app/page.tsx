export default function Home() {
  return (
    <main>
      <div className="p-10 bg-sky-400">
        <h1 className="text-lg font-mono">News Headlines</h1>
      </div>
      <div className="px-10 pt-5 pb-20 bg-gray-200">
        <ul className="list-disc">
            <li><a href="/headlines/gb">United Kingdom</a></li>
            <li><a href="/headlines/us">United States</a></li>
            <li><a href="/headlines/fr">France</a></li>
            <li><a href="/headlines/au">Australia</a></li>
            <li><a href="/headlines/in">India</a></li>
        </ul>
      </div>
    </main>
  );
}
