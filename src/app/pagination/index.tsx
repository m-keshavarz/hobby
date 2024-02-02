import { useState } from "react";
import Pagination from "../components/pagination";
import { Box } from "@chakra-ui/react";

const PaginationPage = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);

  return (
    <Box>
      <table
        style={{
          border: "1px solid black",
          margin: "1rem auto",
          width: "60%",
          textAlign: "center",
        }}
      >
        <thead style={{ textAlign: "center" }}>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>first</td>
            <td style={{ border: "1px solid black" }}>second</td>
            <td style={{ border: "1px solid black" }}>third</td>
            <td style={{ border: "1px solid black" }}>fourth</td>
          </tr>
        </thead>
        <tbody>
          {[...Array(200).keys()]
            .map((item) => {
              return (
                <tr key={item} style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>{item}</td>
                  <td style={{ border: "1px solid black" }}>
                    Mohamad Keshavarz
                  </td>
                  <td style={{ border: "1px solid black" }}>20</td>
                  <td style={{ border: "1px solid black" }}>
                    Yasaman Keshavarz
                  </td>
                </tr>
              );
            })
            .slice((page - 1) * pageSize, page * pageSize)}
        </tbody>
      </table>
      <Pagination
        page={page}
        setPage={setPage}
        totalRecords={200}
        pageSize={10}
        siblingCount={1}
      />
    </Box>
  );

  return;
};

export default PaginationPage;
