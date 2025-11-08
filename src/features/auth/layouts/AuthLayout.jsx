export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[url('/pattern.jpg')] bg-repeat bg-center ">
      {/* Capa azul translúcida + blur */}
      <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-md" />

      {/* Contenido encima */}
      <header className="relative py-8 mb-32 text-center text-white text-3xl font-semibold">
        LiquidityEdge
      </header>

      <main className="relative flex flex-1 items-center justify-center">
        {children}
      </main>
    </div>
  );
}
