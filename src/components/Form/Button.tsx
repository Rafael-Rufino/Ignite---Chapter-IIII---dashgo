import React, { ButtonHTMLAttributes } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ChakraButton {...rest} marginTop="6" colorScheme="pink" size="lg">
      {children}
    </ChakraButton>
  );
}
