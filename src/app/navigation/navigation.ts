import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Admin',
        type: 'group',
        children: [
            {
                id: 'admin_users',
                title: 'Utilizadores',
                type: 'item',
                url: '/admin/users'
            },
            {
                id: 'admin_clients',
                title: 'Clientes',
                type: 'item',
                url: '/admin/clients'
            }
        ]
    },
    {
        id: 'applications',
        title: 'Empresa',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboards',
                title: 'Negócio',
                translate: 'NAV.DASHBOARDS',
                type: 'item',
                url: '/apps/dashboards/project',
                icon: 'dashboard'
            },
            {
                id: 'profile',
                title: 'Perfil',
                type: 'item',
                icon: 'person',
                url: '/pages/profile'
            },
            {
                id: 'contacts',
                title: 'Contactos',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'account_box',
                url: '/apps/contacts'
            }
        ]
    },
    {
        id: 'applications',
        title: 'Takeaway Digital',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'calendar',
                title: 'Calendário',
                translate: 'NAV.CALENDAR',
                type: 'item',
                icon: 'today',
                url: '/apps/calendar'
            },
            {
                id: 'products',
                title: 'Produtos',
                type: 'item',
                icon: 'shopping_cart',
                url: '/apps/e-commerce/products'
            },
            {
                id: 'orders',
                title: 'Encomendas',
                type: 'item',
                icon: 'business_center',
                url: '/apps/e-commerce/orders',
            },
            {
                id: 'products',
                title: 'Reservas',
                type: 'item',
                icon: 'assignment',
                url: '/apps/e-commerce/products2',
                exactMatch: true
            }
        ]
    },
    {
        id: 'applications',
        title: 'Website',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'calendar',
                title: 'Menu digital',
                translate: 'NAV.CALENDAR',
                type: 'item',
                icon: 'today',
                url: '/apps/calendar1'
            },
            {
                id: 'templates',
                title: 'Template',
                type: 'item',
                icon: 'brush',
                url: '/pages/templates',
                children: [
                    {
                        id: 'website-settings',
                        title: 'Settings',
                        type: 'item',
                        icon: 'settings',
                        url: '/pages/template-edition'
                    }
                ]
            }
        ]
    },
];
