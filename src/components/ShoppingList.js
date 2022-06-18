import { Box, List, Divider } from '@mui/material';
import Item from "./Item";

const ShoppingList = ({ title, data, onToggle }) => {
    return (
        <Box>
            {title}:
            <Divider />
            <List sx={{
                height: 500,
                overflow: "auto",
            }}>
                {data.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onClick={() => onToggle(item.id)}
                    />
                ))}
            </List>
        </Box>
    );
}

export default ShoppingList;