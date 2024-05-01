import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-secondary-foreground bg-background/50 h-8 w-full text-center">
      <div className="border-input flex items-center justify-between border-t px-4 py-2">
        <div aria-label="Disclaimer" className="text-sm font-semibold">
          We are not affiliated with Instagram or Meta
        </div>
      </div>
    </footer>
  );
}
