import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        {
            id: '1',
            code: 'WELCOME50',
            description: 'Giảm 50.000đ cho đơn hàng đầu tiên',
            discount_amount: 50000,
            expiry_date: '2025-12-31',
            is_active: true
        },
        {
            id: '2',
            code: 'SUMMER2025',
            description: 'Giảm 100.000đ cho đơn hàng từ 500.000đ',
            discount_amount: 100000,
            expiry_date: '2025-08-31',
            is_active: true
        },
        {
            id: '3',
            code: 'NEWYEAR25',
            description: 'Giảm 250.000đ cho đơn hàng từ 1.000.000đ',
            discount_amount: 250000,
            expiry_date: '2025-01-31',
            is_active: true
        },
        {
            id: '4',
            code: 'FREESHIP',
            description: 'Miễn phí vận chuyển cho đơn hàng từ 300.000đ',
            discount_amount: 40000,
            expiry_date: '2025-06-30',
            is_active: true
        }
    ]
};

const voucherSlice = createSlice({
    name: 'vouchers',
    initialState,
    reducers: {
        addVoucher: (state, action) => {
            const newVoucher = {
                ...action.payload,
                id: (state.items.length + 1).toString()
            };
            state.items.push(newVoucher);
        },
        updateVoucher: (state, action) => {
            const index = state.items.findIndex(v => v.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload
                };
            }
        },
        deleteVoucher: (state, action) => {
            state.items = state.items.filter(v => v.id !== action.payload);
        }
    }
});

export const { addVoucher, updateVoucher, deleteVoucher } = voucherSlice.actions;
export const selectAllVouchers = (state) => state.vouchers.items;
export const selectActiveVouchers = (state) => 
    state.vouchers.items.filter(voucher => 
        voucher.is_active && new Date(voucher.expiry_date) > new Date()
    );

export default voucherSlice.reducer;
