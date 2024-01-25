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
    <Flex>
      <Flex
        alignItems="center"
        alignSelf="center"
        mt="8"
        mx="auto"
        gap="2"
        sx={{
          button: {
            w: "10",
          },
        }}
      >
        {true ? (
          <>
            <Button
              isDisabled={false}
              bg="white"
              variant="outline"
              colorScheme="gray"
              color="neutral.600"
              onClick={() => setPage(1)}
            >
              First
            </Button>
            <Button
              isDisabled={false}
              bg="white"
              variant="outline"
              colorScheme="gray"
              color="neutral.600"
              onClick={() => setPage((p: number) => p - 1)}
            >
              Prev
            </Button>
          </>
        ) : null}
        {[...Array(Math.ceil(totalRecords / pageSize)).keys()].map((item) => (
          <Button
            key={item}
            variant="outline"
            colorScheme="gray"
            color="neutral.600"
            bg={item === page ? "neutral.40" : "white"}
            onClick={() => setPage(item)}
          >
            {item}
          </Button>
        ))}
        {true ? (
          <>
            <Button
              isDisabled={false}
              bg="white"
              variant="outline"
              colorScheme="gray"
              color="neutral.600"
              onClick={() => setPage((p: number) => p + 1)}
            >
              Next
            </Button>
            <Button
              isDisabled={false}
              bg="white"
              variant="outline"
              colorScheme="gray"
              color="neutral.600"
              onClick={() => setPage(lastPage)}
            >
              Last
            </Button>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Pagination;





{/* <Flex gap="0.5rem" justifyContent="center">
      <Flex
        gap="0.5rem"
        alignItems="center"
        alignSelf="center"
        textAlign="center"
        overflow="scroll"
        w="20%"
      >
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
    </Flex> */}