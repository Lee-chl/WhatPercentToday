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
        <TableHead sx={{bgcolor:'rgb(60,104,199)'}}>
          <TableRow>

            <TableCell align="center" sx={{color:'#FFFFFF'}}>검색한 음식</TableCell>
            <TableCell align='center' sx={{color:'#FFFFFF'}}>브랜드</TableCell>
            <TableCell align="center" sx={{color:'#FFFFFF'}}>칼로리</TableCell>
            <TableCell align="center" sx={{color:'#FFFFFF'}}>탄수화물&nbsp;(g)</TableCell>
            <TableCell align="center" sx={{color:'#FFFFFF'}}>단백질&nbsp;(g)</TableCell>
            <TableCell align="center" sx={{color:'#FFFFFF'}}>지방&nbsp;(g)</TableCell>
            <TableCell align="center" sx={{color:'#FFFFFF'}}>나트륨&nbsp;(mg)</TableCell>
            <TableCell align="center" sx={{color:'#FFFFFF',bgcolor:'rgb(50,87,169)'}}>추가 / 삭제</TableCell>
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
