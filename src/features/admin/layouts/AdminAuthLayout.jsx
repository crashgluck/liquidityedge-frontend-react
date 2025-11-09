export default function AdminAuthLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[url('/pattern.jpg')] bg-cover bg-center ">
      {/* Capa azul translúcida + blur */}
      <div className="absolute inset-0 bg-[#001449]/60 backdrop-blur-xs" />
 

      {/* Contenido encima */}
      <header className="relative py-8 mb-14 text-center text-white text-3xl font-semibold">
        <div className="mx-auto flex justify-center my-4">
  <img src="/logo.svg" alt="Logo" className="" />
</div>
      </header>

      <main className="relative flex flex-1 items-center justify-center">
        {children}
      </main>
    </div>
  );
}
