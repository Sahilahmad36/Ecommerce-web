// import React, { useState, useContext } from 'react';
// import { assets } from '../assets/assets.js';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../Context/ShopContext';

// const Navbar = () => {
//     const { setShowSearch, setToken, setCartItems, token, getCartCount } = useContext(ShopContext);
//     const [showFilter, setShowFilter] = useState(false);

//     const navigate = useNavigate();

//     const logout = () => {
//         navigate('/login');
//         localStorage.removeItem('token');
//         setToken('');
//         setCartItems({});
//     };
    

//     return (
//         <div className="flex items-center justify-between py-5 font-medium">
//             <Link to="/">
//                 <img src={assets.logo} className="w-36" alt="logo" />
//             </Link>

//             <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
//             <NavLink to="/" className="relative flex flex-col items-center gap-1 group">
//                     <p className="cursor-pointer relative">
//                         HOME
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full group-hover:bottom-0 transition-all duration-300 ease-in"></span>
//                     </p>
//                 </NavLink>
//                 <NavLink to="/arrive" className="relative flex flex-col items-center gap-1 group">
//                     <p className="cursor-pointer relative">
//                         NEW ARRIVALS
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full group-hover:bottom-0 transition-all duration-300 ease-in"></span>
//                     </p>
//                 </NavLink>

//                 <NavLink to="/shop" className="relative flex flex-col items-center gap-1 group">
//     <p className="cursor-pointer relative">
//         SHOP BY STYLE
//         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full group-hover:bottom-0 transition-all duration-300 ease-in"></span>
//     </p>

//     <div className="absolute left-0 hidden w-44 bg-yellow-200 text-gray-900 shadow-md group-hover:block group-hover:mt-5 transition-all duration-300 ease-in-out z-10">
//         <ul className="flex flex-col p-2">
//             <Link to='/cordset' className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
//                 Cord Sets
//             </Link>
//             <Link to='/gown'  className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
//                 Gowns
//             </Link>
//             <Link to='/lehengas'  className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
//                 Lehengas
//             </Link>
//             <Link to='/jewellery'  className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
//                 Jewellery
//             </Link>
//             <Link to='/celebrity'  className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
//                 Dresses
//             </Link>
//             <Link to='/handbags'  className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
//                 Handbags
//             </Link>
           
//         </ul>
//     </div>
// </NavLink>


//                 <NavLink to="/collection" className="relative flex flex-col items-center gap-1 group">
//                     <p className="cursor-pointer relative">
//                         SHOP BY COLLECTION
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full group-hover:bottom-0 transition-all duration-300 ease-in"></span>
//                     </p>
//                 </NavLink>

//                 <NavLink to="/celebrity" className="relative flex flex-col items-center gap-1 group">
//                     <p className="cursor-pointer relative">
//                         CELEBRITY STYLE
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full group-hover:bottom-0 transition-all duration-300 ease-in"></span>
//                     </p>
//                 </NavLink>

//                 <NavLink to="/jewellery" className="relative flex flex-col items-center gap-1 group">
//                     <p className="cursor-pointer relative">
//                         JEWELLERY
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full group-hover:bottom-0 transition-all duration-300 ease-in"></span>
//                     </p>
//                 </NavLink>
//             </ul>

//             <div className="flex items-center gap-6">
//                 <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search-icon" />
//                 <div className="group relative">
//                     <img onClick={() => (token ? null : navigate('/login'))} src={assets.profile_icon} alt="profile-icon" className="w-5 cursor-pointer" />
//                     {token && (
//                         <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20">
//                             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//                                 <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
//                                     Orders
//                                 </p>
//                                 <p onClick={logout} className="cursor-pointer hover:text-black">
//                                     Logout
//                                 </p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <Link to="/cart" className="relative">
//                     <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5 cursor-pointer" />
//                     <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//                         {getCartCount()}
//                     </p>
//                 </Link>
//                 <img onClick={() => setShowFilter(true)} src={assets.menu_icon} alt="menu-icon" className="w-5 cursor-pointer sm:hidden" />
//             </div>

            
//             <div
//                 className={`fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 transition-all ${showFilter ? 'block' : 'hidden'} z-20`}
//                 onClick={() => setShowFilter(false)}
//             >
//                 <div
//                     className={`absolute top-0 left-0 bottom-0 bg-white transition-all duration-500 ease-in-out ${showFilter ? 'w-[80%]' : 'w-0'} overflow-hidden`}
//                 >
//                     <div className="flex flex-col text-gray-600">
//                         <div onClick={() => setShowFilter(false)} className="flex items-center gap-4 p-3 cursor-pointer">
//                             <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="dropdown-icon" />
//                             <p>Back</p>
//                         </div>
//                         <NavLink onClick={() => setShowFilter(false)} className="py-2 pl-6 border" to="/">
//                             HOME
//                         </NavLink>
//                         <NavLink onClick={() => setShowFilter(false)} className="py-2 pl-6 border" to="/arrive">
//                             NEW ARRIVALS
//                         </NavLink>
//                         <NavLink onClick={() => setShowFilter(false)} className="py-2 pl-6 border" to="/shop">
//                             SHOP BY STYLE
//                         </NavLink>
//                         <NavLink onClick={() => setShowFilter(false)} className="py-2 pl-6 border" to="/collection">
//                             SHOP BY COLLECTION
//                         </NavLink>
//                         <NavLink onClick={() => setShowFilter(false)} className="py-2 pl-6 border" to="/celebrity">
//                             CELEBRITY STYLE
//                         </NavLink>
//                         <NavLink onClick={() => setShowFilter(false)} className="py-2 pl-6 border" to="/jewellery">
//                             JEWELLERY
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const { setShowSearch, setToken, setCartItems, token, getCartCount } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [smallScreenDropdown, setSmallScreenDropdown] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <Link to="/">
                <img src={assets.logo} className="w-36" alt="logo" />
            </Link>

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to="/" className="relative flex flex-col items-center gap-1 group">
                    <p className="cursor-pointer relative">
                        HOME
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300 ease-in"></span>
                    </p>
                </NavLink>

                <NavLink to="/arrive" className="relative flex flex-col items-center gap-1 group">
                    <p className="cursor-pointer relative">
                        NEW ARRIVALS
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300 ease-in"></span>
                    </p>
                </NavLink>

                <div
                    className="relative flex flex-col items-center gap-1 group"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <NavLink to="/shop">
                    <p className="cursor-pointer relative">
                        SHOP BY STYLE
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300 ease-in"></span>
                    </p>
                    </NavLink>

                    {showDropdown && (
                        <div className="absolute left-0 w-44 bg-yellow-200 text-gray-900 shadow-md mt-5 z-10">
                            <ul className="flex flex-col p-2">
                                <Link to="/cordset" className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                                    Cord Sets
                                </Link>
                                <Link to="/gown" className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                                    Gowns
                                </Link>
                                <Link to="/lehengas" className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                                    Lehengas
                                </Link>
                                <Link to="/jewellery" className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                                    Jewellery
                                </Link>
                                <Link to="/celebrity" className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                                    Celebrity Dresses
                                </Link>
                                <Link to="/saree" className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                                    Saree
                                </Link>
                                <Link to="/handbags" className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                                    Handbags
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>

                <NavLink to="/collection" className="relative flex flex-col items-center gap-1 group">
                    <p className="cursor-pointer relative">
                        SHOP BY COLLECTION
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300 ease-in"></span>
                    </p>
                </NavLink>

                <NavLink to="/celebrity" className="relative flex flex-col items-center gap-1 group">
                    <p className="cursor-pointer relative">
                        CELEBRITY STYLE
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300 ease-in"></span>
                    </p>
                </NavLink>

                <NavLink to="/jewellery" className="relative flex flex-col items-center gap-1 group">
                    <p className="cursor-pointer relative">
                        JEWELLERY
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300 ease-in"></span>
                    </p>
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search-icon" />
                <div className="group relative">
                    <img onClick={() => (token ? null : navigate('/login'))} src={assets.profile_icon} alt="profile-icon" className="w-5 cursor-pointer" />
                    {token && (
                        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20">
                            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                                    Orders
                                </p>
                                <p onClick={logout} className="cursor-pointer hover:text-black">
                                    Logout
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5 cursor-pointer" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>

                <img
                    onClick={() => setShowFilter(true)}
                    src={assets.menu_icon}
                    alt="menu-icon"
                    className="w-5 cursor-pointer sm:hidden"
                />
            </div>

            {showFilter && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setShowFilter(false)}>
                    <div className="absolute left-0 top-0 w-[80%] bg-white p-5 h-full">
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-bold">Menu</p>
                            <img
                                onClick={() => setShowFilter(false)}
                                src={assets.dropdown_icon}
                                className="h-5 cursor-pointer"
                                alt="dropdown-icon"
                            />
                        </div>

                        <ul className="mt-5 text-gray-700">
                            <NavLink to="/" onClick={() => setShowFilter(false)} className="block py-2">
                                HOME
                            </NavLink>
                            <NavLink to="/arrive" onClick={() => setShowFilter(false)} className="block py-2">
                                NEW ARRIVALS
                            </NavLink>

                            <li className="relative">
                                <p
                                    className="flex justify-between items-center cursor-pointer py-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSmallScreenDropdown(!smallScreenDropdown);
                                    }}
                                >
                                    SHOP BY STYLE
                                   
                                    <span className={`transform transition-transform ${smallScreenDropdown ? 'rotate-180' : 'rotate-0'}`}>
                                        ▼
                                    </span>
                                </p>
                                {smallScreenDropdown && (
                                    <ul className="pl-5 text-sm uppercase">
                                        <Link to="/cordset" onClick={() => setShowFilter(false)} className="block py-1">
                                            Cord Sets
                                        </Link>
                                        <Link to="/gown" onClick={() => setShowFilter(false)} className="block py-1">
                                            Gowns
                                        </Link>
                                        <Link to="/lehengas" onClick={() => setShowFilter(false)} className="block py-1">
                                            Lehengas
                                        </Link>
                                        <Link to="/jewellery" onClick={() => setShowFilter(false)} className="block py-1">
                                            Jewellery
                                        </Link>
                                        <Link to="/celebrity" onClick={() => setShowFilter(false)} className="block py-1">
                                            Celebrity Dresses
                                        </Link>
                                        <Link to="/saree" onClick={() => setShowFilter(false)} className="block py-1">
                                            Saree
                                        </Link>
                                        <Link to="/handbags" onClick={() => setShowFilter(false)} className="block py-1">
                                            Handbags
                                        </Link>
                                    </ul>
                                )}
                            </li>

                            <NavLink to="/collection" onClick={() => setShowFilter(false)} className="block py-2">
                                SHOP BY COLLECTION
                            </NavLink>
                            <NavLink to="/celebrity" onClick={() => setShowFilter(false)} className="block py-2">
                                CELEBRITY STYLE
                            </NavLink>
                            <NavLink to="/jewellery" onClick={() => setShowFilter(false)} className="block py-2">
                                JEWELLERY
                            </NavLink>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
