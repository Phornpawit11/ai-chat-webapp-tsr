export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center bg-[#11100F]">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Side: Copy & Auth */}
        <div className="flex flex-col max-w-lg w-full mx-auto lg:mx-0 lg:pr-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#E8E6E3] font-serif leading-[1.1] mb-12 text-center lg:text-left">
            The AI for <br />
            problem solvers
          </h1>

          <div className="bg-[#181715] border border-white/5 p-6 rounded-[2rem] shadow-2xl w-full max-w-[400px] mx-auto lg:mx-0">
            <button className="w-full flex items-center justify-center space-x-3 bg-transparent border border-white/10 hover:bg-white/5 text-[#E8E6E3] py-3 px-4 rounded-xl transition-colors font-medium text-sm mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative flex items-center mb-6">
              <div className="grow border-t border-white/10"></div>
              <span className="shrink-0 mx-4 text-xs text-[#706B65] uppercase tracking-wider">
                OR
              </span>
              <div className="grow border-t border-white/10"></div>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#201F1D] border border-white/10 text-[#E8E6E3] placeholder-[#706B65] py-3.5 px-4 rounded-xl focus:outline-none focus:border-white/30 focus:bg-[#252422] transition-colors text-sm"
              />
              <button className="w-full bg-[#E8E6E3] hover:bg-white text-[#11100F] font-semibold py-3.5 px-4 rounded-xl transition-colors text-sm">
                Continue with email
              </button>
            </div>

            <p className="mt-5 text-[11px] text-[#706B65] text-center px-4">
              By continuing, you acknowledge Anthropic's{" "}
              <a href="#" className="underline hover:text-[#A6A29C]">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full h-[50vh] lg:h-[80vh] rounded-[2rem] overflow-hidden">
          <img
            src="/images/hero-bike.png"
            alt="People working on a bicycle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
