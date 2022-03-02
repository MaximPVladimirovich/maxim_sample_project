import { Menu, MenuItem } from "@mui/material"

export default function ScrollMenu({ item, anchorEl, onClose, builders, onSelect }) {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            {builders.map((item, index) => (
                <MenuItem
                    key={index}
                    onClick={onSelect(item)}
                >
                    {item.name}
                </MenuItem>
            ))}
        </Menu>
    )
}