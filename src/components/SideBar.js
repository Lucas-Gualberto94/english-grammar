import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar className="sideBar" >
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{ textAlign: "center" }}
        >
          {" "}
          <h2>Topics</h2>
        </MenuItem>
        <SubMenu icon={<HomeOutlinedIcon />} label="Present">
          <MenuItem icon={<PeopleOutlinedIcon />}>Simple Present</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Present Continuous</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Present Perfect</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Present Perfect Continuous</MenuItem>
        </SubMenu>

        <SubMenu icon={<HomeOutlinedIcon />} label="Past Tense">
          <MenuItem icon={<PeopleOutlinedIcon />}>Simple Past</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Past Continuous</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Past Perfect</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Past Perfect Continuous</MenuItem>
        </SubMenu>

        <SubMenu icon={<HomeOutlinedIcon />} label="Future Tense">
          <MenuItem icon={<PeopleOutlinedIcon />}>Simple Future</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Future Continuous</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Future Perfect</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Future Perfect Continuous</MenuItem>
        </SubMenu>

        <SubMenu icon={<HomeOutlinedIcon />} label="Conditional">
          <MenuItem icon={<PeopleOutlinedIcon />}>Zero Conditional</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>1° Conditional</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>2° Conditional</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>3° Conditional</MenuItem>
        </SubMenu>

      </Menu>
    </Sidebar>
  )
}

export default SideBar;