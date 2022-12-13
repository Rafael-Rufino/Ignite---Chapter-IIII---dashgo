import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rafael Rufino</Text>
          <Text color="gray.300" fontSize="small">
            rafaelrufino@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Rafael Rufino"
        src="https://github.com/Rafael-Rufino.png"
      />
    </Flex>
  );
}
