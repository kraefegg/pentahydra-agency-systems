import { Image } from "@/components/ui/image";
import { ASSETS } from "@/content/assets";

export default function ArchitectureBand() {
  return (
    <figure className="relative border-y border-titanium/12 bg-ink">
      <div className="relative aspect-[21/9] w-full overflow-hidden md:aspect-[3/1]">
        <Image
          src={ASSETS.banner}
          alt="PentaHydra systems architecture: hexagonal core platform linked to distributed shielded nodes across a connected data grid"
          className="h-full w-full object-cover"
          fittingType="fill"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/60" />
        <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan/50" />
        <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-cyan/50" />
        <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-cyan/50" />
        <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-cyan/50" />
      </div>
    </figure>
  );
}