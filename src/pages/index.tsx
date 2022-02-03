import { Flex, Stack } from "@chakra-ui/react";
import { Button } from "../components/Form/Button";
import { Input } from "../components/Form/Input";
export default function SignIn() {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        flexDirection="column"
        width="100%"
        maxWidth={360}
        background="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>
        <Button type="submit">Entrar</Button>
      </Flex>
    </Flex>
  );
}

// #flex - FormControl
