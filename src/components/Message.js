import { Box, Card, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch } from "@mui/material";
import { grey } from "@mui/material/colors";

export function Message(props) {
    return (<Card>
        <Box sx={{ p: 2.0, display: 'flex' }}>
            <Avatar variant="rounded" src="avatar1.jpg" />
            <Stack spacing={0.5}>
                <Typography fontWeight={700}>{props.auteur}</Typography>
                <Typography variant="body2" color="text.secondary">{props.date}</Typography>
            </Stack>
        </Box>
        <Divider />
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
        <Typography variant="body2" color="text.secondary">{props.contenu}</Typography>
    
        </Stack>
    </Card>)
}