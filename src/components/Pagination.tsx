import {Button} from "@mui/material";

export default function Pagination() {
    return (
        <div style={{textAlign: 'center'}}>
            <Button variant="outlined" style={{marginRight: '8px'}}>이전</Button>
            <span>1</span>
            <Button variant="outlined" style={{marginLeft: '8px'}}>다음</Button>
        </div>
    );
}
