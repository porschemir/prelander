import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Click here to Get Started" },
      { name: "description", content: "Click here to get started." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[radial-gradient(ellipse_at_top,_#0a3d1f_0%,_#000000_60%)]">
      <div className="w-full max-w-xl rounded-2xl bg-black/60 border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.6)] px-8 py-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
          Click here to Get
          <br />
          <span className="text-[#22c55e]">Started</span>
        </h1>

        <div className="my-8 flex flex-col items-center gap-1 text-[#22c55e]">
          <svg width="28" height="14" viewBox="0 0 28 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14L0 0h28L14 14z" />
          </svg>
          <svg width="28" height="14" viewBox="0 0 28 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14L0 0h28L14 14z" />
          </svg>
        </div>

        <a
          href="https://shi.rwadlar.com/"
          className="block w-full rounded-full bg-gradient-to-b from-[#22c55e] to-[#16a34a] py-4 text-white font-semibold tracking-widest uppercase text-sm shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:shadow-[0_0_60px_rgba(34,197,94,0.7)] transition-shadow"
        >
          Continue
        </a>
      </div>
    </div>
  );
}
