import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages = currentPage > 1
    ? [ ...new Array() ]
    : []
  
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  )
}