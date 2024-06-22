import {Outlet} from "react-router-dom";
import SideBar from "~/layouts/main/sidebar";
import RightBar from "~/layouts/main/rightbar";
// import {useModal} from "~/store/modal/hooks";
// import Modal from "~/modals";
import {useEffect} from "react";
import {useAppearance} from "~/store/appearance/hooks";


function MainLayout() {

    // const modal = useModal()
    const appearance = useAppearance()

    useEffect(() => {

        document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
        document.documentElement.style.setProperty('--background-primary-alpha', appearance.backgroundColor.primary + 'a6')
        document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary)
        document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
        document.documentElement.style.setProperty('--background-modal', appearance.backgroundColor.modal)

        document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
        document.documentElement.style.setProperty('--color-primary-alpha', appearance.color.primary + '12')
        document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
        document.documentElement.style.setProperty('--color-base', appearance.color.base)
        document.documentElement.style.setProperty('--color-base-secondary', appearance.color.baseSecondary)

        document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)

        document.documentElement.style.setProperty('--font-size', appearance.fontSize + 'px')

    }, [appearance])

    return(
        <div className="flex justify-center ">
            <div className="lg:mx-36 flex xl:w-[1265px] lg:w-[1050px] md:w-[790px] sm:w-[650px] w-[350px]">
                <SideBar/>
                <main className="flex-1 flex gap-[30px]">
                    <main className="flex-1 border-x border-[#2f3336]">
                        <Outlet/>
                    </main>
                    <RightBar/>
                </main>

            </div>
        </div>
    )
}
export default MainLayout;