import * as RadixAvatar from "@radix-ui/react-avatar";
import React, { JSXElementConstructor } from "react";
import Text from "./Text";

const AvatarImage = ({ image }: { image: string }) => {
   const className = "h-8 min-h-[2rem] w-8 min-w-[2rem] rounded-full";
   return <RadixAvatar.Image src={image} className={className} />;
};

const AvatarFallback = ({ initials }: { initials: string }) => {
   const className = "flex h-8 w-8 items-center justify-center rounded-full bg-amber-100";
   return (
      <RadixAvatar.Fallback className={className}>
         <Text size="sm" weight="b" className="text-amber-400">
            {initials}
         </Text>
      </RadixAvatar.Fallback>
   );
};

type Props = { initials: string; props?: React.ComponentProps<keyof JSXElementConstructor<HTMLDivElement>> };

const Avatar = ({ initials, ...props }: Props) => {
   return (
      <RadixAvatar.Root className="cursor-pointer" {...props}>
         <AvatarImage image={""} />
         <AvatarFallback initials={initials} />
      </RadixAvatar.Root>
   );
};

export default Avatar;
