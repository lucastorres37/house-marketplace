import Image from "next/image"
import { useRouter } from "next/router"
import ExploreIcon from '../../public/assets/svg/exploreIcon.svg'
import OffersIcon from '../../public/assets/svg/localOfferIcon.svg'
import ProfileIcon from '../../public/assets/svg/personIcon.svg'


function Navbar() {
    const router = useRouter();
    // const currentPath = router.pathname 

    const pathMathRoute = (route) => {
        if(route === router.pathname){
            return true
        }
    }


    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => router.push('/')}>
                        <ExploreIcon 
                            className={pathMathRoute('/') ? 'tabIsActive' : 'tabIsntActive'}
                        />
                        <p className={
                                pathMathRoute('/')
                                ? 'navbarListItemNameActive'
                                : 'navbarListItemName'
                            }
                        >
                            Explore
                        </p>
                    </li>
                    <li className="navbarListItem" onClick={() => router.push('/Offers')}>
                        <OffersIcon 
                            className={pathMathRoute('/Offers') ? 'tabIsActive' : 'tabIsntActive'}
                        />
                        <p className={
                                pathMathRoute('/Offers')
                                ? 'navbarListItemNameActive'
                                : 'navbarListItemName'
                            }
                        >
                            Offer
                        </p>
                    </li>
                    <li className="navbarListItem" onClick={() => router.push('/Profile')}>
                        <ProfileIcon
                            className={pathMathRoute('/Profile') ? 'tabIsActive' : 'tabIsntActive'}
                        />
                        <p className={
                                pathMathRoute('/Profile')
                                ? 'navbarListItemNameActive'
                                : 'navbarListItemName'
                            }
                        >
                            Profile
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Navbar
