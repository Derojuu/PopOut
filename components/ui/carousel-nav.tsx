import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export interface CarouselNavProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  label: string;
}

export function CarouselNav({ onPrev, onNext, prevDisabled, nextDisabled, label }: CarouselNavProps) {
  const buttonClass =
    "inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background text-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <div className="hidden items-center gap-2 md:flex">
      <button
        type="button"
        className={buttonClass}
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label={`Previous ${label}`}
      >
        <Icon name="chevronLeft" className={cn("h-4 w-4")} />
      </button>
      <button
        type="button"
        className={buttonClass}
        onClick={onNext}
        disabled={nextDisabled}
        aria-label={`Next ${label}`}
      >
        <Icon name="chevronRight" className={cn("h-4 w-4")} />
      </button>
    </div>
  );
}
