import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


export default function PageButton({page, setPage, maxPage}) {
    let arrayPage = Array.from(Array(maxPage).keys())

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,
                },
            }}
        >
            <ButtonGroup variant="text" aria-label="text button group" color="primary">
                {arrayPage.map((numberOfPage, i) => (
                    <Button key={i} onClick={() => setPage(page=numberOfPage+1)}>{numberOfPage+1}</Button>
                ))}
            </ButtonGroup>
        </Box>
    )
}
