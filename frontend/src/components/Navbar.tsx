import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='h-16 flex justify-center'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              to='/'
              className={navigationMenuTriggerStyle()}
            >
              Positions
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to='/candidates'
              className={navigationMenuTriggerStyle()}
            >
              Candidates
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
