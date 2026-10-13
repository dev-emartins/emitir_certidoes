export function Hero() {
  return (
    <div className="text-center mb-12 md:mb-16 bg-white/60 backdrop-blur-sm rounded-3xl py-8 px-4 shadow-sm border border-white/50">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGvbi99ikicC5Q6pJF3NY-ub7iBEzj38Ar9uuDv1VAr-DHwJPqh71x7LJYjFPVj-CLLpV3e8cJZIjs-egxUFjt1nm7u7QAa2y0rjUhCFwxftVNlom19RVsAeOIGrARZI7PWy78RrtqqHrWaU7VAKDQw5ZPN2f4dTaGk3znYLcaqsB12PxBHg_cYIrl_e4_/s1600/logo.png"
          alt="Logo"
          className="w-16 h-16 object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-slate-800 via-blue-800 to-cyan-700 bg-clip-text text-transparent tracking-tight">
          Emitir Certidões
        </h1>
      </div>
      <p className="text-slate-600 mt-3 max-w-lg mx-auto text-base md:text-lg">
        Centraliza a emissão de certidões fiscais e jurídicas de forma rápida e
        segura.
      </p>
    </div>
  )
}
