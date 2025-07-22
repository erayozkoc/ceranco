export default function Subscriber() {
  return (
    <section id="abone" className="py-20 bg-brand text-white text-center relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-white opacity-5 blur-3xl rounded-full -top-20 left-1/2 -translate-x-1/2 z-0" />
      <div className="relative z-10 container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Yeni koleksiyonlardan ilk sen haberdar ol</h2>
        <p className="text-white/80 mb-8 text-lg">
          Sadece en yeniler, indirimler ve stil önerileri için e-posta gönderiyoruz.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative w-full sm:w-auto flex-1">
            <input
              name="email"
              type="email"
              placeholder="E-posta adresin"
              required
              className="w-full px-12 py-3 rounded-full text-white focus:outline-none shadow-md border-white border-1 bg-transparent"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.94 4.94A2 2 0 014.586 4h10.828a2 2 0 011.646.94L10 11.586 2.94 4.94zM2 6.414V14a2 2 0 002 2h12a2 2 0 002-2V6.414l-7.293 7.293a1 1 0 01-1.414 0L2 6.414z" />
            </svg>
          </div>

          <button
            type="submit"
            className="bg-dark hover:bg-black transition-colors px-6 py-3 rounded-full text-white font-semibold shadow-md border-white border-1 hover:border-black"
          >
            Abone Ol
          </button>
        </form>
      </div>
    </section>
  );
}
