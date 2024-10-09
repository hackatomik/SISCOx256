export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1>Título del header aquí</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Contenido del Main aquí
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Información del footer aquí
      </footer>
    </div>
  );
}
