import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
interface IHeadingProps extends HeadingProps {
  title: string;
}
export function Heading({ title }: IHeadingProps) {
  return (
    <ChakraHeading size="lg" fontWeight="normal" mb="8" align="center">
      {title}
    </ChakraHeading>
  );
}
