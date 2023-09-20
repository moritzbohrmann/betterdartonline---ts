import Flex, { Props as FlexProps } from "./Flex";

type SubComponentProps = {
   className?: string;
   children: JSX.Element;
};

const Header = ({ className, children }: SubComponentProps) => {
   return (
      <Flex stretchX className={`h-1/5 ${className}`}>
         {children}
      </Flex>
   );
};

const Content = ({ className, children }: SubComponentProps) => {
   return (
      <Flex stretchX stretchY className={`${className}`}>
         {children}
      </Flex>
   );
};

const Footer = ({ className, children }: SubComponentProps) => {
   return (
      <Flex stretchX className={`h-1/5 ${className}`}>
         {children}
      </Flex>
   );
};

type ModalProps = FlexProps & {
   bordered?: boolean;
   className?: string;
   children: JSX.Element[];
};

const Modal = ({ ...props }: ModalProps) => {
   return <Flex orientation="v" {...props} />;
};

export { Modal, Header, Content, Footer };
