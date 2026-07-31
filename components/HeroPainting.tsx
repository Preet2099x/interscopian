const STARRY_NIGHT_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg";

export function HeroPainting() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={STARRY_NIGHT_URL}
        alt=""
        className="animate-kenburns h-full w-full object-cover opacity-80"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 78%, transparent), linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 78%, transparent), linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="absolute inset-0 bg-starry mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-starry via-transparent to-starry/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-starry/70 via-transparent to-starry/70" />
    </div>
  );
}
