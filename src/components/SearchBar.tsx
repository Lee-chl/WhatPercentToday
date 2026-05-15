import {Box, IconButton, InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useRef, type KeyboardEvent} from "react";

interface searchBarProps {
    onChangeFoodName: (foodName: string) => void;
    onChangePageNum: (pageNum: number) => void;
}

export default function SearchBar({onChangeFoodName, onChangePageNum}: searchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const changeFoodName = () => {
        if (!inputRef.current) return;
        onChangePageNum(1);
        onChangeFoodName(inputRef.current.value);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            changeFoodName();
        }
    };

    return (
        <Box
            sx={{
                display: "flex", // 1. 자식들을 가로로 배치하고 flex 속성을 활성화
                alignItems: "center", // 2. 아이콘과 입력창의 세로 중앙 정렬
                width: "100%", // 3. 부모 너비를 꽉 채우거나 특정 수치(예: 400) 지정
            }}
        >
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    bgcolor: "rgba(240, 240, 240, 1)",
                    height: "73px",
                    borderRadius: "17px",
                    marginBottom: "20px",
                }}
                placeholder="   음식을 검색해주세요"
                inputRef={inputRef}
                onKeyDown={onKeyDown}
            />
            <IconButton
                type="button"
                sx={{p: "10px"}}
                aria-label="search"
                onClick={changeFoodName}
            >
                <SearchIcon/>
            </IconButton>
        </Box>
    );
}
