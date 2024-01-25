import { useMemo } from "react";
import { PaginationProps } from "./pagination";

const usePagination = ({
  pageSize,
  totalRecords,
}: PaginationProps) => {
  const lastPage = useMemo(() => {
    return Math.ceil(totalRecords / pageSize);
  }, [pageSize, totalRecords]);

  return { lastPage };
};

export default usePagination;
