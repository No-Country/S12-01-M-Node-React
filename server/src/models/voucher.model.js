import mongoose from 'mongoose';

const voucherSchema = new mongoose.Schema({
    reference: {
        type: String,
        required: true,
    },
    purchase_date: {
        type: Date,
        required: true,
    },
    ref_ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true,
    },
});

const Voucher = mongoose.model('Voucher', voucherSchema);

export default Voucher;
