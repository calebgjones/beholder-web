const contentArray = [
/*

~i text ~i - italic
~b text ~b - bold
~u text ~u - underline
~n - line break

Tags can be nested/stacked: "~u~bhello world~b~u this is Caleb"
Results in: bold+underlined "hello world" followed by unstyled "this is Caleb"

------------------------------------------

Content Structure:

{
    module: "Module Name",
    sections: [
        {
            title: "Section Title",
            subsections: [
                {
                    title: "Subsection Title",
                    security: "Security requirements text (supports markup tags)",
                    article: "Knowledge base article number",
                    notes: "Additional notes (supports markup tags)",
                    modal: false,  // true = show security modal when clicked
                    mult: false // true = show modal AND navigate to route (requires modal: true)
                }
            ],
            security: "Security requirements for this section",
            article: "Knowledge base article number",
            notes: "Additional notes",
            modal: false,  // true = show security modal when clicked
            mult: false    // true = show modal AND navigate to route (requires modal: true)
        }
    ]
}

Note: 
- modal: true + mult: false/undefined → Show modal, prevent navigation
- modal: true + mult: true → Show modal AND navigate to route
- modal: false → No modal, just navigate to section page

*/

    {
        module: "Home",
        section: "Home",
        subsection: "",
        security: "~uNone~u",
        article: "000014000",
        notes: "These are some~iextra notes~iabout the~uHome module~u.",
        modal: false
    },

/* Application Module Sections */
    {
        module: "Application",
        sections: [
            {
                title: "View",
                subsections: [],
                security: "All Application functions (except Switch Store), require no security permissions",
                article: "000014373",
                notes: "",
                modal: true
            },
            {
                title: "Recent Documents",
                subsections: [],
                security: "All Application functions (except Switch Store), require no security permissions",
                article: "000014373",
                notes: "",
                modal: true,
                mult: true
             },
             {
                title: "Recent Reports",
                subsections: [],
                security: "All Application functions (except Switch Store), require no security permissions",
                article: "000014373",
                notes: "",
                modal: true
             },
             {
                title: "Toggle Low-Resolution Scrolling",
                subsections: [],
                security: "All Application functions (except Switch Store), require no security permissions",
                article: "000014373",
                notes: "",
                modal: true
             },
             {
                title: "Close All Unpinned",
                subsections: [],
                security: "All Application functions (except Switch Store), require no security permissions",
                article: "000014373",
                notes: "",
                modal: true
             },
             {
                title: "Close All",
                subsections: [],
                security: "All Application functions (except Switch Store), require no security permissions",
                article: "000014373",
                notes: "",
                modal: true
             },
             {
                title: "Switch Store",
                subsections: [],
                security: "User requires~i~uStores User Can Access~u~iboxes Checked for each they want to access but box is otherwise accessible",
                article: "000014373",
                notes: "Some~u~b~iextra notes~i~b~u",
                modal: true
             },
             {
                title: "Lock Screen",
                subsections: [],
                security: "All Application functions (except Switch Store), require no security permissions",
                article: "000014373",
                notes: "",
                modal: true
             }
        ]
    },

   

/* Parts Module Sections */
    {
        module: "Parts",
        sections: [
            {
                title: "Parts Invoice",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Parts Inventory",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Ordering",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Receiving",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Special Orders",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Supplier Returns",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Shipping Inquiry",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Parts Transfer",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Cashiering",
                subsections: [
                    {
                        title: "Miscellaneous Receipt",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Paid Out",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Special Order Deposit",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Reprint Misc Invoice",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Reprint Part Invoice",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    }
                ],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Inventory Updating",
                subsections: [
                    {
                        title: "Update Part Prices Using Escalators",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Part Number Utility",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Scanned Inventory",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Inventory Count Sheets",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Change Part Categories",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    }
                ],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Lists",
                subsections: [
                    {
                        title: "Part Escalators",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Price Books",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Suppliers",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Purchase Orders",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "EPC Suppliers",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Part Labels",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Order Types",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Part Adjustment Types",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Web Commerce Tax",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Web Commerce Methods of Payment",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Shipping Carriers",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Supplier Purchase Orders",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Part Kits",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    }
                ],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Reports",
                subsections: [
                    {
                        title: "Auto Escalator Report",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Count Sheet Report",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Inventory Update Validation",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Lightspeed Industry Benchmarks",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Parts Adjustment Report",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Top Selling Parts",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Supersession Loops",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    }
                ],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Part Invoice Analysis",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Web Order Log",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* Service Module Sections */
    {
        module: "Service",
        sections: [
            {
                title: "New Estimate",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "New Repair Order",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "New RO for Major Unit",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Estimates & Repair Orders",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Update Labor Paid",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Technician Time Entry",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Old Service Scheduler",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Service Schedule Summary",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Service Scheduler w Calendar",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Warranty Claims",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Imported Repair Orders",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Lists",
                subsections: [
                    {
                        title: "Bulletins",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "RO Categories",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Flat Rates",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Form Batches",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Labor Rates",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Service Follow Up Chains",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Standard Jobs",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    },
                    {
                        title: "Technicians",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    }
                ],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Reports",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },
    

/* Sales Module Sections */
    {
        module: "Sales",
        sections: [
            {
                title: "Sales Quotes",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Sales Orders",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* Rental Module Sections */
    {
        module: "Rental",
        sections: [
            {
                title: "New Rental Contract",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* Management Activity Module Sections */
    {
        module: "Management Activity",
        sections: [
            {
                title: "Dashboard",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* Receivables Module Sections */
    {
        module: "Receivables",
        sections: [
            {
                title: "Customer Invoices",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* Payables Module Sections */
    {
        module: "Payables",
        sections: [
            {
                title: "Vendor Bills",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* General Ledger Module Sections */
    {
        module: "General Ledger",
        sections: [
            {
                title: "Chart of Accounts",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* Payroll Module Sections */
    {
        module: "Payroll",
        sections: [
            {
                title: "Employee Records",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* System Module Sections */
    {
        module: "System",
        sections: [
            {
                title: "User Management",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },

/* Help Section */
    {
        module: "Help",
        sections: [
            {
                title: "About",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Remote Support Assistance",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "System Info",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Admin Utilities",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Development Settings",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            }
        ]
    },
    
/* Other Items Sections */
    {
        module: "More",
        sections: [
            {
                title: "Cashiering Global Perms",
                subsections: [],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Reporting",
                subsections: [
                    {
                        title: "Custom Reports Repository",
                        security: "",
                        article: "",
                        notes: "",
                        modal: false
                    }
                ],
                security: "",
                article: "",
                notes: "",
                modal: false
            },
            {
                title: "Testing1",
                subsections: [
                    {
                        title: "Testing2",
                        security: "This is a test of testing2",
                        article: "10000",
                        notes: "These are some example notes for testing2",
                        modal: false
                    },
                                        {
                        title: "Testing3",
                        security: "This is a test of testing3",
                        article: "1002",
                        notes: "~bThese are some example notes for testing3~b",
                        modal: true
                    }
                ]
            }
        ]
    }
];
export default contentArray;