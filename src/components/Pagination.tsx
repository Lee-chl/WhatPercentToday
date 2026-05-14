import { Button } from "@mui/material";
interface paginationProps {
  onChangePageNum: (pageNum: number) => void;
  pageNum: number;
}
export default function Pagination({
  onChangePageNum,
  pageNum,
}: paginationProps) {
  const prevPage = () => {
    if (pageNum === 1) return;

    onChangePageNum(pageNum - 1);
  };
  const nextPage = () => {
    onChangePageNum(pageNum + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        variant="outlined"
        style={{ marginRight: "8px" }}
        onClick={prevPage}
      >
        이전
      </Button>
      <span>{pageNum}</span>
      <Button
        variant="outlined"
        style={{ marginLeft: "8px" }}
        onClick={nextPage}
      >
        다음
      </Button>
    </div>
  );
}
