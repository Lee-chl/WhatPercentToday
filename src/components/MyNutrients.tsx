import {Box, Fab, Popover, Typography} from "@mui/material";
import {useState} from "react";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

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

    return (
        <Box sx={{position: 'fixed', bottom: 32, right: 32}}>
            {/* 우측 하단 고정 버튼 (Floating Action Button/플로팅 액션 버튼) */}
            <Fab color="primary" aria-label="calculation" onClick={handleClick}>
                <SelfImprovementIcon fontSize='large'/>
            </Fab>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        sx: {
                            width: 250,
                            height: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '20px'
                        }
                    }
                }}
            >
                {/* 헤더 */}
                <Box sx={{p: 2, bgcolor: 'primary.main', color: 'white'}}>
                    <Typography variant="h6">내 영양 계산</Typography>
                </Box>

                {/* 채팅 내용 영역 */}
                <Box sx={{flex: 1, p: 2, overflowY: 'auto', bgcolor: '#f5f5f5'}}>
                    {/*{cs.map((c) => (<Box>{계산 내용} 위에 memo로 </Box>)}*/}
                    <Typography variant="body2"
                                sx={{
                                    mb: 1,
                                    p: 1,
                                    bgcolor: 'white',
                                    borderRadius: 1,
                                    whiteSpace: 'pre-line',
                                    textAlign: 'center'
                                }}>
                        칼로리: 얼마
                        <br/>
                        단백질: 몇 퍼
                        <br/>
                        탄수화물: 몇 퍼
                        <br/>
                        지방: 몇 퍼
                    </Typography>

                </Box>
            </Popover>
        </Box>
    );
}