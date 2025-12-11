import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { CalendarDays, CirclePlus, FileText, LayoutDashboard, Settings, SquareCheckBig } from "lucide-react";
import '../assets/global.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Buttons({open, user}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const listItemBtnStyles = {
        '&': {
            borderRadius: '15px',
            width: '95%',
            // margin: '10px'
        },
        '&:hover': {
            backgroundColor: '#503cc9',
            borderRadius: '15px',
            width: '95%',
            // margin: '10px'
        }, 
    }


    return (<div>
        <List>
            <Link to={'/dashboard'} className="linkBtn">
                <ListItem key={'Dashboard'} disablePadding sx={{ display: 'block'}} >
                    <ListItemButton selected={selectedIndex === 0} onClick={(e) => handleListItemClick(e, 0)} sx={[ { minHeight: 48, px: 2.5, }, open ? { justifyContent: 'initial',} : {justifyContent: 'center',}, listItemBtnStyles]} >
                        <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', }, open ? { mr: 3,} : { mr: 'auto', },]} >
                        <LayoutDashboard color="white"/> 
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} sx={[ open ? { opacity: 1, } : { opacity: 0,},]} />
                    </ListItemButton>
                </ListItem>
            </Link>

            <Link to={"/apply-leave"} className="linkBtn">
                <ListItem key={'Apply Leave'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton selected={selectedIndex === 1} onClick={(e) => handleListItemClick(e, 1)} sx={[ { minHeight: 48, px: 2.5, }, open ? { justifyContent: 'initial',} : {justifyContent: 'center',}, listItemBtnStyles]} >
                        <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', }, open ? { mr: 3,} : { mr: 'auto', },]} >
                        <CirclePlus color="white"/> 
                        </ListItemIcon>
                        <ListItemText primary={'Apply Leave'} sx={[ open ? { opacity: 1, } : { opacity: 0,},]} />
                    </ListItemButton>
                </ListItem>
            </Link>


            <Link to={"/my-requests"} className="linkBtn">
                <ListItem key={'My Requests'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton selected={selectedIndex === 2} onClick={(e) => handleListItemClick(e, 2)} sx={[ { minHeight: 48, px: 2.5, }, open ? { justifyContent: 'initial',} : {justifyContent: 'center',}, listItemBtnStyles]} >
                        <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', }, open ? { mr: 3,} : { mr: 'auto', },]} >
                        <FileText color="white"/> 
                        </ListItemIcon>
                        <ListItemText primary={'My Requests'} sx={[ open ? { opacity: 1, } : { opacity: 0,},]} />
                    </ListItemButton>
                </ListItem>
            </Link>


           {(user.role !== 'employee' ) &&  
            <Link to={"/pending-requests"} className="linkBtn">
                    <ListItem key={'Manager Pending'} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton selected={selectedIndex === 3} onClick={(e) => handleListItemClick(e, 3)} sx={[ { minHeight: 48, px: 2.5, }, open ? { justifyContent: 'initial',} : {justifyContent: 'center',}, listItemBtnStyles]} >
                            <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', }, open ? { mr: 3,} : { mr: 'auto', },]} >
                            <SquareCheckBig color="white"/> 
                            </ListItemIcon>
                            <ListItemText primary={'Manage Pending'} sx={[ open ? { opacity: 1, } : { opacity: 0,},]} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            }


            <Link to={"/calendar"} className="linkBtn">
                <ListItem key={'Calendar'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton selected={selectedIndex === 4} onClick={(e) => handleListItemClick(e, 4)} sx={[ { minHeight: 48, px: 2.5, }, open ? { justifyContent: 'initial',} : {justifyContent: 'center',}, listItemBtnStyles]} >
                        <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', }, open ? { mr: 3,} : { mr: 'auto', },]} >
                        <CalendarDays color="white"/> 
                        </ListItemIcon>
                        <ListItemText primary={'Calendar'} sx={[ open ? { opacity: 1, } : { opacity: 0,},]} />
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
    </div>);
};