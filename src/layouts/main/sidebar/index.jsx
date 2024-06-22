import Logo from "~/layouts/main/sidebar/logo";
import Menu from "~/layouts/main/sidebar/menu";

function SideBar() {
    return(
        <aside className="max-w-[275px] min-h-screen px-2">
            <Logo/>
            <Menu/>
        </aside>
    )
}

export default SideBar;