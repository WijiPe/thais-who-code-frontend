import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


export default function PageButton() {
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
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </ButtonGroup>
        </Box>
    )
}
