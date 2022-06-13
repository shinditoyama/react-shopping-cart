import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material";

const Item = ({ item, onClick }) => {
    return (
        <ListItem
            key={item.id}
            secondaryAction={<ListItemText primary={`R$ ${item.price}`} />}
            disablePadding
        >
            <ListItemButton role={undefined} onClick={onClick} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={item.checked}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItemButton>
        </ListItem>
    );
}

export default Item;