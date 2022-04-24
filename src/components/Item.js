import { ListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";

const Item = ({ item, onClick }) => {
    return (
        <ListItem
            key={item.id}
            disablePadding
        >
            <ListItemIcon>
                <Checkbox
                    checked={item.checked}
                    onChange={onClick}
                />
            </ListItemIcon>
            <ListItemText primary={item.name} />
        </ListItem>
    );
}

export default Item;