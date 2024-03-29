import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction="row"
      justify="space-everly"
      align="center"
      spacing="6"
      mt="8"
    >
      <Box mx="auto" align="center" justify="center" direction="row">
        <Box mb="5">
          <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
        </Box>
        <Stack direction="row" spacing="4">
          <PaginationItem number={1} isCurrent />
          <PaginationItem number={2} />
          <PaginationItem number={3} />
          <PaginationItem number={4} />
        </Stack>
      </Box>
    </Stack>
  );
}
