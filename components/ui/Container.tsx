import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

/** Page frame from the design: 1600px max width with 80px side gutters on desktop. */
export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-site px-5 sm:px-8 lg:px-gutter", className)}>
      {children}
    </div>
  );
}
