import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function TitleHighlight() {
  return (
    <div className="mx-auto max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl">
      <PointerHighlight>
            <div className="py-10 w-full">
              <div className="max-w-7xl mx-auto pb-0 px-4 md:px-8 lg:px-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-1 text-white font-bold text-indigo-900">
                  My Experiences
                </h2>
                <p className="text-xl text-white text-sm md:text-base">
                  Here is a quick summary of my most recent experiences:
                </p>
              </div>
            </div>
      </PointerHighlight>
    </div>
  );
}
