export const navData = [
    {
        header: "Overview",
        items: [
            {
                label: 'Dashboard',
                icon: 'solar:database-bold-duotone',
                href: '/dashboard'
            },
        ]
    },
    {
        header: "Pages",
        items: [
            {
                label: 'Customer',
                icon: "solar:users-group-two-rounded-bold", 
                subMenu: [
                    { label: 'Customer List', href: 'list' },
                    { label: 'Customer Create', href: 'create' },
                ]
            },
            {
                label: 'User Management',
                icon: "solar:user-bold-duotone", 
                subMenu: [
                    { label: 'Users', href: 'users' },
                    { label: 'Roles', href: 'roles' },
                    { label: 'Permissions', href: 'permissions' }
                ]
            },
            {
                label: 'Subscriptions',
                icon: "solar:folder-open-bold-duotone", 
                subMenu: [
                    { label: 'Subscriptions', href: 'subscription' },
                    { label: 'Plans', href: 'plans' },
                    { label: 'Payments', href: 'payments' },
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
                label: 'Settings',
                icon: 'solar:settings-bold-duotone',
                href: '/settings'
            }
        ]
    }
]