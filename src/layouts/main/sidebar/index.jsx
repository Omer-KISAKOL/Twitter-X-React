import Logo from "~/layouts/main/sidebar/logo";
import Menu from "~/layouts/main/sidebar/menu";

function SideBar() {
    return(
        <aside className="max-w-[275px] w-[100%] min-h-screen flex flex-col px-2">
            <div className="sticky top-0 ">
                <Logo/>
                <Menu/>
            </div>
        </aside>
    )
}

export default SideBar;