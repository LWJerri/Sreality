export default function Landing() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover text-white select-none">
      <div className="h-screen flex backdrop-blur-md">
        <div className="text-center mx-auto my-auto space-y-5">
          <h1 className="text-3xl font-bold">Find your own place now!</h1>

          <a
            className="group relative inline-flex overflow-hidden rounded border border-current px-8 py-3 text-white"
            href="/apartments"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">Search</span>
          </a>
        </div>
      </div>
    </div>
  );
}
