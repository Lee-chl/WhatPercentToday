import { Box, Fab, IconButton, Popover, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useSelector } from "react-redux";
import type { RootState } from "../slices/store.ts";
import { percent } from "../util/inTakeNutrients.ts";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import MoodBadTwoToneIcon from '@mui/icons-material/MoodBadTwoTone';
import type { MyNutrientType, waringImageType } from "../types/FoodType.tsx";

export function MyNutrients() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [iconImage, setIconImage] = useState<waringImageType>({
    calorie: <MoodIcon />,
    carbohydrate: <MoodIcon />,
    protein: <MoodIcon />,
    fat: <MoodIcon />,
    sodium: <MoodIcon />,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 클릭한 버튼의 정보를 anchorEl에 집어넣음
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // null을 집어넣으면 기준점이 사라지니까 팝오버가 닫힘
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const mynutirents = useSelector((state: RootState) => state.nutrients);

  const showPercent = useMemo(() => {
    return percent(mynutirents);
  }, [mynutirents]);

  const { calorie, carbohydrate, protein, fat, sodium } = showPercent;

  const nutrientForImg: MyNutrientType = {
    calorie: calorie,
    carbohydrate: carbohydrate,
    protein: protein,
    fat: fat,
    sodium: mynutirents.sodium,
  };

  function makeIconImage(nutrient: number, type: string) {
    switch (type) {
      case "percent":
        if (nutrient >= 150) return <SentimentVeryDissatisfiedTwoToneIcon />;
        else if(nutrient >=100) return <MoodBadTwoToneIcon/>
        else if (nutrient >= 70) return <SentimentDissatisfiedIcon />;
        else if (nutrient >= 50) return <SentimentSatisfiedIcon />;
        else return <MoodIcon />;
      case "sodium":
        if (nutrient >= 3000) return <SentimentVeryDissatisfiedTwoToneIcon />;
        else if (nutrient >= 2300) return <MoodBadTwoToneIcon />;
        else if (nutrient >= 2000) return <SentimentDissatisfiedIcon />;
        else if (nutrient >= 1500) return <SentimentSatisfiedIcon/>
        else return <MoodIcon />;
    }
  }

  useEffect(() => {
    const sodiumIcon = makeIconImage(nutrientForImg.sodium, "sodium");
    const calorieIcon = makeIconImage(calorie, "percent");
    const carbohydrateIcon = makeIconImage(carbohydrate, "percent");
    const proteinIcon = makeIconImage(protein, "percent");
    const fatIcon = makeIconImage(fat, "percent");

    setIconImage({
      calorie: calorieIcon,
      carbohydrate: carbohydrateIcon,
      protein: proteinIcon,
      fat: fatIcon,
      sodium: sodiumIcon,
    });
  }, [mynutirents]);

  return (
    <Box sx={{ position: "fixed", bottom: 32, right: 32 }}>
      {/* 우측 하단 고정 버튼 (Floating Action Button/플로팅 액션 버튼) */}
      <Fab color="primary" aria-label="calculation" onClick={handleClick}>
        <SelfImprovementIcon fontSize="large" />
      </Fab>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              width: 400,
              height: 500,
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
            },
          },
        }}
      >
        {/* 창 부분 */}
        <Box
          sx={{
            display: "flex",
            p: 2,
            bgcolor: "primary.main",
            color: "white",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">내 영양 계산</Typography>
          <IconButton onClick={handleClose} aria-label="delete">
            <HighlightOffIcon />
          </IconButton>
        </Box>

        <Box sx={{ flex: 1, p: 2, bgcolor: "#f5f5f5" }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              p: 2,
              bgcolor: "white",
              borderRadius: 1,
              whiteSpace: "pre-line",
              textAlign: "center",
              color: "blue",
            }}
          >
            목표
            <br />
            칼로리 2000 기준
            <br />
            탄수화물: 250g 단백질: 100g
            <br />
            지방: 65g
            <br />
            나트륨: 2000 이하(안전)
            <br /> 2,300mg 이상(경고) <br /> 3,000mg 이상(고위험)
            <br />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "black",
              p: 2,
              bgcolor: "white",
              textAlign: "center",
            }}
          >
            {iconImage.calorie}
            칼로리: {calorie.toFixed(1)} %
            <br />
            {iconImage.carbohydrate}
            탄수화물:{carbohydrate.toFixed(1)} %
            <br />
            {iconImage.protein}
            단백질: {protein.toFixed(1)} %
            <br />
            {iconImage.fat}
            지방: {fat.toFixed(1)} %
            <br />
            {iconImage.sodium}
            나트륨 : {sodium.toFixed(1)} %
          </Typography>
        </Box>
      </Popover>
    </Box>
  );
}
