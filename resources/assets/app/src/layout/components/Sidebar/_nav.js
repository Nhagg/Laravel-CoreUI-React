export default {
    items: [
        {
            name: 'Home Page',
            url: '/home',
            icon: 'fa fa-home',
        },
        {
            name: 'Dev Docs',
            url: '/dev-docs',
            icon: 'fa fa-file-code-o',
        },
        // {
        //     name: 'Table',
        //     url: '/table',
        //     icon: 'icon-home',
        // },
        {
            title: true,
            name: 'Other Components',
            wrapper: {                        // optional wrapper object
                element: '',                // required valid HTML5 element tag
                attributes: {}                // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: ''                         // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Typography',
            url: '/typography',
            icon: 'icon-pencil',
        },
        {
            name: 'Base',
            url: '/base',
            icon: 'icon-puzzle',
            children: [
                {
                    name: 'Breadcrumbs',
                    url: '/base/breadcrumbs',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Cards',
                    url: '/base/cards',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Collapses',
                    url: '/base/collapses',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Dropdowns',
                    url: '/base/dropdowns',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Forms',
                    url: '/base/forms',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Jumbotrons',
                    url: '/base/jumbotrons',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'List groups',
                    url: '/base/list-groups',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Navs',
                    url: '/base/navs',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Paginations',
                    url: '/base/paginations',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Popovers',
                    url: '/base/popovers',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Progress Bar',
                    url: '/base/progress-bar',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Switches',
                    url: '/base/switches',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Tables',
                    url: '/base/tables',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Tabs',
                    url: '/base/tabs',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Tooltips',
                    url: '/base/tooltips',
                    icon: 'icon-puzzle'
                }
            ]
        },
        {
            name: 'Icons',
            url: '/icons',
            icon: 'icon-star',
            children: [
                {
                    name: 'Font Awesome',
                    url: '/icons/font-awesome',
                    icon: 'icon-star',
                    badge: {
                        variant: 'danger',
                        text: '5.1'
                    }
                },
                {
                    name: 'Flags',
                    url: '/icons/flags',
                    icon: 'icon-star',
                },
                {
                    name: 'Social',
                    url: '/icons/social-buttons',
                    icon: 'icon-star'
                },
            ]
        },
        {
            name: 'Modals',
            url: '/notifications/modals',
            icon: 'icon-bell'
        },
        {
            name: 'Widgets',
            url: '/widgets',
            icon: 'icon-calculator',
        },
        {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            children: [
                {
                    name: 'Login',
                    url: '/login',
                    icon: 'icon-star'
                },
                {
                    name: 'Register',
                    url: '/register',
                    icon: 'icon-star'
                },
                {
                    name: 'Error 404',
                    url: '/404',
                    icon: 'icon-star'
                },
            ]
        },
    ]
};
