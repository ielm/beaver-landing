export default function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-[calc(50%-25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
          <svg x="50%" y={-1} className="overflow-visible fill-primary/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            >
              <animate
                attributeName="opacity"
                dur="6s"
                values="0.15;0.65;0.15"
                repeatCount="indefinite"
                begin="0s"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </path>
            <path
              d="M99.5 200h201v201h-201Z M299.5 400h201v201h-201Z M99.5 600h201v201h-201Z"
              strokeWidth={0}
            >
              <animate
                attributeName="opacity"
                dur="2s"
                values="0.35;0.15;0.35"
                repeatCount="indefinite"
                begin="0s"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </path>
          </svg>
        </svg>
      </div>

      <div className="pointer-events-none fixed -top-1/2 right-0 h-[1000px] w-[1000px] rounded-full bg-primary/5 blur-[200px]" />
      <div className="pointer-events-none fixed -left-1/2 top-1/2 h-[1000px] w-[1000px] rounded-full bg-orange-100/5 blur-[200px]" />
    </>
  );
}
