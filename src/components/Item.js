import { Tooltip, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material";

const Item = ({ item, onClick }) => {
    const description = (
        <div>
            ID: {item.id}<br />
            Nome: {item.name}<br />
            Preço: {item.price.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL"
            })}<br />
            Tags: {item.tags.join(", ")}
        </div>
    );

    return (
        <ListItem
            key={item.id}
            disablePadding
        >
            <Tooltip title={description} placement="right" arrow disableInteractive>
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
            </Tooltip>
        </ListItem>
    );
}

export default Item;