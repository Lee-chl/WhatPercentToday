import {Box, IconButton, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar() {
    return (
        <Box sx={{
            display: 'flex',          // 1. 자식들을 가로로 배치하고 flex 속성을 활성화
            alignItems: 'center',     // 2. 아이콘과 입력창의 세로 중앙 정렬
            width: '100%',            // 3. 부모 너비를 꽉 채우거나 특정 수치(예: 400) 지정
        }}>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="음식을 검색해주세요"
            />
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Box>
    );
}
