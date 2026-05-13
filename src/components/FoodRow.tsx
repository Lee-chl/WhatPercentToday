import {
    Button,


    TableCell,

    TableRow, Tooltip,

} from "@mui/material";
import React from "react";

export default function FoodRow() {

    return (
        <React.Fragment>
            <TableRow>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell align="center">
                    <Tooltip title='한 개 기준' >
                        <span>
                            <Button>+</Button>
                            <Button>-</Button>
                        </span>
                    </Tooltip>
                </TableCell>

            </TableRow>
        </React.Fragment>
    )
}