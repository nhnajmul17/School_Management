import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div class="navbar bg-base-100 bg-orange-300">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><Link to="/home">Home</Link></li>
                        <li ><Link to="/notice">Notice</Link></li>
                        <li ><Link to="/news">News</Link></li>
                        <li ><Link to="/class">Class</Link></li>
                        <li ><Link to="/club">Club</Link></li>
                        <li ><Link to="/teachers" >Teachers</Link></li>
                        <li ><Link to="/club">Calender</Link></li>
                        <li > <Link to="/club">About</Link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Gondar School</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li ><Link to="/home">Home</Link></li>
                    <li ><Link to="/notice">Notice</Link></li>
                    <li ><Link to="/news">News</Link></li>
                    <li ><Link to="/class">Class</Link></li>
                    <li >< Link to="/club">Club</Link></li>
                    <li ><Link to="/teachers" >Teachers</Link></li>
                    <li ><Link to="/club">Calender</Link></li>
                    <li > <Link to="/club">About</Link></li>

                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        {/* <li><a>Settings</a></li> */}
                        <li><Link to='login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;