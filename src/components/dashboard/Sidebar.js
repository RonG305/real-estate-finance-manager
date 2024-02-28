import React from 'react'
import { Link } from 'react-router-dom'


const sidebarLinks = [
    {linkTitle: 'Overview', url: '/overview'},
    {linkTitle: 'landlords', url: '/landlords'},
    {linkTitle: 'properties', url: '/properties'},
    {linkTitle: 'tenants', url: '/tenants'},
    {linkTitle: 'suppliers', url: '/suppliers'}
]

const Sidebar = () => {
  return (
    <div>
        <div>
            {sidebarLinks.map((link, index) => (
                <Link >{link.linkTitle}</Link>
            ))}
        </div>
    </div>
  )
}

export default Sidebar