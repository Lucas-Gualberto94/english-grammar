import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

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
          <h2>Topics</h2>
        </MenuItem>
        <SubMenu label="Present">
          <MenuItem>Simple Present</MenuItem>
          <MenuItem>Present Continuous</MenuItem>
          <MenuItem>Present Perfect</MenuItem>
          <MenuItem>Present Perfect Continuous</MenuItem>
        </SubMenu>

        <SubMenu label="Past Tense">
          <MenuItem>Simple Past</MenuItem>
          <MenuItem>Past Continuous</MenuItem>
          <MenuItem>Past Perfect</MenuItem>
          <MenuItem>Past Perfect Continuous</MenuItem>
        </SubMenu>

        <SubMenu label="Future Tense">
          <MenuItem>Simple Future</MenuItem>
          <MenuItem>Future Continuous</MenuItem>
          <MenuItem>Future Perfect</MenuItem>
          <MenuItem>Future Perfect Continuous</MenuItem>
        </SubMenu>

        <SubMenu label="Conditional">
          <MenuItem>Zero Conditional</MenuItem>
          <MenuItem>1° Conditional</MenuItem>
          <MenuItem>2° Conditional</MenuItem>
          <MenuItem>3° Conditional</MenuItem>
        </SubMenu>

      </Menu>
    </Sidebar>
  )
}

export default SideBar;