import { Button, TableCell, TableRow, Tooltip } from "@mui/material";
import React from "react";
import type { FoodType } from "../types/FoodType";

interface FoodProps {
  food: FoodType;
}

export default function FoodRow({ food }: FoodProps) {

  return (
    <React.Fragment>
      <TableRow>
        <TableCell align="center">{food.FOOD_NM_KR}</TableCell>
        <TableCell align="center">
          {Math.round(Number(food.AMT_NUM1))}
        </TableCell>
        <TableCell align="center">
          {Math.round(Number(food.AMT_NUM6))}
        </TableCell>
        <TableCell align="center">
          {Math.round(Number(food.AMT_NUM3))}
        </TableCell>
        <TableCell align="center">
          {Math.round(Number(food.AMT_NUM4))}
        </TableCell>
        <TableCell align="center">
          {Math.round(Number(food.AMT_NUM13))}
        </TableCell>
        <TableCell align="center">
          <Tooltip title="한 개 기준">
            <span>
              <Button>+</Button>
              <Button>-</Button>
            </span>
          </Tooltip>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
