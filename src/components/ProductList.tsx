import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FoodRow from "./FoodRow.tsx";
import type { FoodType } from "../types/FoodType.tsx";

interface ProductListProps {
  foods: FoodType[];
}

export default function ProductList({ foods }: ProductListProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>검색한 음식</TableCell>
            <TableCell align="center">칼로리</TableCell>
            <TableCell align="center">탄수화물&nbsp;(g)</TableCell>
            <TableCell align="center">단백질&nbsp;(g)</TableCell>
            <TableCell align="center">지방&nbsp;(g)</TableCell>
            <TableCell align="center">나트륨&nbsp;(mg)</TableCell>
            <TableCell align="center">추가 / 삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food) => (
            <FoodRow key= {food.NUM} food={food} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
