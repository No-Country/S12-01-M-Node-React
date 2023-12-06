import mongoose, { Mongoose } from 'mongoose';

const purchaseReceiptSchema = new Mongoose.Schema({
    reference:{
        type: String,
        required: true,
    },
    purchase_date:{
        type: Date,
        default: Date.now,
        required: true,
    },
    ref_ticket:[{
        type: mongoose.Schema.Types.ObjectsId,
        ref: 'Ticket',
        required: true,
    }],
});

const PurchaseReceipt = mongoose.model('PurchaseReceipt',purchaseReceiptSchema);

export default PurchaseReceipt;