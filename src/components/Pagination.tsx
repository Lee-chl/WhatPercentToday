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
        style={{ color:'rgba(184, 184, 184, 1)'}}
        onClick={prevPage}
      >
        &lt;
      </Button>
      <span style={{color:'rgba(139, 139, 139, 1)'}}>{pageNum}</span>
      <Button
        style={{ color:'rgba(184, 184, 184, 1)' , width:'22px', height:'22px', borderRadius:'7px', border:'1px' }}
        onClick={nextPage}
      >
        &gt;
      </Button>
    </div>
  );
}
