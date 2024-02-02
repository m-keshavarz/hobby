/* eslint-disable no-constant-condition */
import { Button, Flex } from "@chakra-ui/react";
import usePagination from "./pagination.biz";

export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalRecords: number;
  pageSize: number;
};

const Pagination = (props: PaginationProps) => {
  const { page, setPage, totalRecords, pageSize } = props;

  const { lastPage } = usePagination(props);

  return (
    <Flex gap="0.5rem" justifyContent="center">
      <Flex gap="0.5rem">
        <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
          Prev
        </Button>

        {[...Array(Math.ceil(totalRecords / pageSize)).keys()].map((item) => {
          return (
            <Button
              size={{ base: "sm", lg: "md" }}
              key={item}
              onClick={() => setPage(item + 1)}
              bg={item + 1 === page ? "blue.500" : "blackAlpha.100"}
              color={item + 1 === page ? "white" : "black"}
            >
              {item + 1}
            </Button>
          );
        })}
        <Button
          onClick={() => setPage(page + 1)}
          isDisabled={page === lastPage}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
