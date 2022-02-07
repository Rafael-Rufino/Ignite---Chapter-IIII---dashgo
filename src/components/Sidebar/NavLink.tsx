import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ children, icon, ...rest }: INavLinkProps) {
  return (
    <Link
      {...rest}
      display="flex"
      align="center"
      py="1"
      _hover={{
        color: "pink.500",
      }}
    >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
