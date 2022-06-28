import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PageButton({page, setPage, maxPage}) {

    const handleChange = (event, value) => {
        setPage(value);
    };

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
            <Stack spacing={2}>
                <Pagination count={maxPage} page={page} onChange={handleChange} />
            </Stack>
        </Box>
        //     <ButtonGroup variant="text" aria-label="text button group" color="primary">
        //         {arrayPage.map((numberOfPage, i) => (
        //             <Button key={i} onClick={() => setPage(page=numberOfPage+1)}>{numberOfPage+1}</Button>
        //         ))}
        //     </ButtonGroup>

    )
}
