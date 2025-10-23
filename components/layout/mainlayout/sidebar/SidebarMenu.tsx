export const navData = [
    {
        header: "Overview",
        items: [
            {
                label: 'Dashboard',
                icon: 'solar:database-bold-duotone',
                href: '/dashboard'
            },
            {
                label: 'Analytics',
                icon: 'solar:chart-square-bold-duotone',
                href: '/analytics'
            },
        ]
    },
    {
        header: "Pages",
        items: [
            {
                label: 'User Management',
                icon: "solar:user-bold-duotone", 
                subMenu: [
                    { label: 'Users', href: 'users' },
                    { label: 'Roles', href: 'roles' },
                    { label: 'Permissions', href: 'permissions' }
                ]
            },
        ]
    },
    {
        header: "Other",
        items: [
            {
                label: 'Reports',
                icon: "solar:file-bold-duotone", 
                subMenu: [
                    { label: 'Products', href: 'reports/products' },
                    { label: 'Sales', href: 'reports/sales' }
                ]
            },
            {
                label: 'Subscription',
                icon: 'solar:folder-open-bold-duotone',
                href: '/subscription'
            },
            {
                label: 'Settings',
                icon: 'solar:settings-bold-duotone',
                href: '/settings'
            }
        ]
    }
]