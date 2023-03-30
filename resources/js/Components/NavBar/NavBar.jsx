import './NavBar.css';
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavDropdown from '@/Components/NavBar/Dropdown';
export default function NavBar({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <nav className="nav-bar bg-white shadow-lg	">
            <div className="w-full h-full justify-between flex flex-row items-center px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-full w-full">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>
                        <div className="flex space-x-8 ml-10 sm:hidden flex-row items-center">
                            <NavLink href={route('index')} active={route().current('index')}>
                                Take Test
                            </NavLink>
                            <NavDropdown>
                                <NavDropdown.Trigger >
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 border border-transparent text-sm leading-4 font-medium  
                                            text-black bg-white hover:text-white hover:bg-primary focus:outline-none transition ease-in-out duration-150
                                            visit:text-white visit:bg-primary focus:text-white focus:bg-primary h-full"
                                        >
                                            Our Services
                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                </NavDropdown.Trigger>
                                <NavDropdown.Content width="w-72">
                                    <NavDropdown.Link href={route('profile.edit')}>AI Powered Eye Testing</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Ophtalmologist Prescription</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>MDM Managment</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Remote Device Applications</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Home Service for Visually Imapried</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Low Vision Devices</NavDropdown.Link>
                                </NavDropdown.Content>
                            </NavDropdown>
                            <NavDropdown>
                                <NavDropdown.Trigger >
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 border border-transparent text-sm leading-4 font-medium  
                                            text-black bg-white hover:text-white hover:bg-primary focus:outline-none transition ease-in-out duration-150
                                            visit:text-white visit:bg-primary focus:text-white focus:bg-primary h-full"
                                        >
                                            Find an Opthalmologist
                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                </NavDropdown.Trigger>
                                <NavDropdown.Content width="w-72">
                                    <NavDropdown.Link href={route('profile.edit')}>AI Powered Eye Testing</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Ophtalmologist Prescription</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>MDM Managment</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Remote Device Applications</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Home Service for Visually Imapried</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Low Vision Devices</NavDropdown.Link>
                                </NavDropdown.Content>
                            </NavDropdown>
                            <NavDropdown>
                                <NavDropdown.Trigger >
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 border border-transparent text-sm leading-4 font-medium  
                                            text-black bg-white hover:text-white hover:bg-primary focus:outline-none transition ease-in-out duration-150
                                            visit:text-white visit:bg-primary focus:text-white focus:bg-primary h-full"
                                        >
                                            Become a member
                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                </NavDropdown.Trigger>
                                <NavDropdown.Content width="w-72">
                                    <NavDropdown.Link href={route('profile.edit')}>AI Powered Eye Testing</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Ophtalmologist Prescription</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>MDM Managment</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Remote Device Applications</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Home Service for Visually Imapried</NavDropdown.Link>
                                    <NavDropdown.Link href={route('profile.edit')}>Low Vision Devices</NavDropdown.Link>
                                </NavDropdown.Content>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className="flex items-center ml-6 sm:hidden">
                        <div className="ml-3 relative h-full">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        type="button"
                                        className="text-black inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium 
                                        bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 h-full"
                                    >
                                        {user?.name} profile

                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content align="right">
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center hidden sm:flex">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('index')} active={route().current('index')}>
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">{user?.name}</div>
                        <div className="font-medium text-sm text-gray-500">{user?.email}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}