import * as RadixCollapsible from "@radix-ui/react-collapsible";

type Props = {
   trigger: JSX.Element;
   content: JSX.Element;
   className?: string;
};

const Collapsible = ({ trigger, content, className }: Props) => {
   return (
      <RadixCollapsible.Root className={className}>
         <RadixCollapsible.Trigger>{trigger}</RadixCollapsible.Trigger>
         <RadixCollapsible.Content className="my-2">{content}</RadixCollapsible.Content>
      </RadixCollapsible.Root>
   );
};

export default Collapsible;
