/* eslint-disable no-constant-condition */
import { Button, Flex } from "@chakra-ui/react";
import usePagination from "./pagination.biz";

export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalRecords: number;
  pageSize: number;
  siblingCount: number;
  startingCount: number
  endingCount: number
};

const Pagination = (props: PaginationProps) => {
  const { page, setPage } = props;

  const { lastPage, buttonMaker } = usePagination(props);

  return (
    <Flex gap="0.5rem" justifyContent="center">
      <Flex gap="0.5rem">
        <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
          Prev
        </Button>

        {buttonMaker()}

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
