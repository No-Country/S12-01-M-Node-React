export default function Home() {
  return (
    <main className="p-10 min-h-[calc(100vh_-_80px)]">
      <section>
        <h1 className="text-6xl font-bold leading-[84.6px]">
          Todos los eventos cercanos a vos para que hagas lo que más te
          apasiona.
        </h1>
        <input
          type="text"
          placeholder="Buscar evento..."
        />
      </section>
      <aside>
        <div></div>
      </aside>
    </main>
  );
}
