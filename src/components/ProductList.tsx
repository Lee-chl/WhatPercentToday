import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import FoodRow from "./FoodRow.tsx";

export default function ProductList() {
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
                        <TableCell align="center">추가 / 삭제</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rows.map((row) => (*/}
                    {/*    <FoodRow key={row.name} row={row}/>*/}
                    {/*))}*/}
                    <FoodRow/>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
