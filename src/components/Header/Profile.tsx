import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rafael Rufino</Text>
        <Text color="gray.300" fontSize="small">
          rafaelrufino@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Rafael Rufino"
        src="https://github.com/Rafael-Rufino.png"
      />
    </Flex>
  );
}
