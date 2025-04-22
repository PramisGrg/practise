import React from "react";
import { cn } from "../../libs/utlis";

const MaxWidthContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-10 lg:max-w-[1150px] lg:px-16 xl:max-w-[1440px]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthContainer;
