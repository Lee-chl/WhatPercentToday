import {Box, Fab, IconButton, Popover, Typography} from "@mui/material";
import {useMemo, useState} from "react";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {useSelector} from "react-redux";
import type {RootState} from "../slices/store.ts";
import {percent} from "../util/inTakeNutrients.ts";

export function MyNutrients() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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
    }, [mynutirents])

    const {carbohydrate, protein, fat, sodium} = showPercent;

    return (
        <Box sx={{position: "fixed", bottom: 32, right: 32}}>
            {/* 우측 하단 고정 버튼 (Floating Action Button/플로팅 액션 버튼) */}
            <Fab color="primary" aria-label="calculation" onClick={handleClick}>
                <SelfImprovementIcon fontSize="large"/>
            </Fab>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            width: 400,
                            height: 400,
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
                        <HighlightOffIcon/>
                    </IconButton>
                </Box>

                <Box sx={{flex: 1, p: 2, bgcolor: "#f5f5f5"}}>
                    <Typography variant="h6"
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
                        <br/>
                        칼로리 2000 기준
                        <br/>
                        탄수화물: 250g
                        단백질: 100g
                        <br/>
                        지방: 65g
                        <br/>

                    </Typography>
                    <Typography variant="h6" sx={{
                        color: 'black', p: 2,
                        bgcolor: "white", textAlign: "center",
                    }}>
                        {/*{cs.map((c) => (<Box>{계산 내용} 위에 memo로 </Box>)}*/}
                        {/*  .toFixed(0) % 나눗셈 소수점 */}
                        단백질: {carbohydrate.toFixed(1)} %
                        <br/>
                        탄수화물:{protein.toFixed(1)} %
                        <br/>
                        지방: {fat.toFixed(1)} %
                        <br/>
                        나트륨 : {sodium.toFixed(1)} %
                    </Typography>
                </Box>
            </Popover>
        </Box>
    );
}
