export const actionTypes = {
    // MAIN
    GET_INVENTORY: 'get-inventory',

    ADD_SELLSTATE: 'add-sellstate',
    DELETE_SELLSTATE: 'delete-sellstate',

    SET_DESABLE: 'set-desable',
    REMOVE_DESABLE: 'remove-desable',

    INC_QUANTITY: 'inc-quantity',
    DEC_QUANTITY: 'dec-quantity',
    MOD_QUANTITY: 'mod-quantity',

    GENERATE_INVOICE: 'generate-invoice',
    
    // INVENTORY
    SHOW_PRODUCT_INFO: 'show-prod-info',
    EDIT_PRODUCT_INFO: 'edit-prod-info',
    ADD_PRODUCT: 'add-prod',
    DELETE_PRODUCT: 'delete-prod',

    // INVOICE
    GET_INVOICES: 'get-invoices',
    DELETE_INVOICE: 'delete-invoice',
}