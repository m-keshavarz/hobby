import { useMemo } from "react";
import { PaginationProps } from "./pagination";
import { Button, Text } from "@chakra-ui/react";

const usePagination = (props: PaginationProps) => {
  const {
    pageSize,
    totalRecords,
    page,
    setPage,
    siblingCount,
    startingCount,
    endingCount,
  } = props;
  const lastPage = useMemo(() => {
    return Math.ceil(totalRecords / pageSize);
  }, [pageSize, totalRecords]);

  const Dots = () => {
    return <Text fontSize="xx-large">...</Text>;
  };

  const AllButtons = () => {
    return (
      <>
        {[...Array(totalRecords / pageSize).keys()]
          .map((counter) => {
            return (
              <Button
                onClick={() => setPage(counter + 1)}
                backgroundColor={page === counter + 1 ? "brown" : "grey"}
              >
                {counter + 1}
              </Button>
            );
          })
          .slice(page - siblingCount - 1, page + siblingCount)}
      </>
    );
  };

  const buttonMaker = () => {
    return (
      <>
        <Button onClick={() => setPage(1)}>1</Button>
        {page > startingCount && <Dots />}
        <AllButtons />
        {page < lastPage - endingCount && <Dots />}
        <Button onClick={() => setPage(lastPage)}>{lastPage}</Button>
      </>
    );
  };

  const showButtons = () => {};

  return { lastPage, buttonMaker, Dots };
};

export default usePagination;
