import PurchaseReceipt from "../models/purchaseReceipt.model";

export const getAllPurchaseReceipts = async (req, res) => {
    
    try{
        const purchaseReceipts = await PurchaseReceipt.find();
        res.status(200).json(purchaseReceipts);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const createPurchaseReceipt = async (req, res) => {
    const {reference,purchase_date,ref_ticket} = req.body;

    try{
        const newPurchaseReceipt = new PurchaseReceipt({
            reference,
            purchase_date,
            ref_ticket,
        });

        await newPurchaseReceipt.save();
        res.status(201).json(newPurchaseReceipt)
    }catch (err){
        res.status(500).json({message: err.message});
    }
};

export const getPurchaseReceiptById = async (req, res) => {
    const {id} = req.params;
    
    try{
        const purchaseReceipt = await PurchaseReceipt.findById(id);
        res.status(200).json(purchaseReceipt);
    }catch(err){
        res.status(404).json({message: err.message});
    }
};

export const updatePurchaseReceipt = async (req, res) => {
    const {id} = req.params;
    const {reference,purchase_date,ref_ticket} = req.body;

    try{
        const updatedPurchaseReceipt = await PurchaseReceipt.findByIdAndUpdate(
            id,
            {reference,purchase_date,ref_ticket},
            {new:true}
        );
        res.status(200).json(updatedPurchaseReceipt);
    }catch(err){
        res.status(400).json({message:err.message});
    }
};

export const deletePurchaseReceipt = async (req, res) => {
    const {id} = req.params;

    try{
        await PurchaseReceipt.findByIdAndDelete(id);
        res.status(200).json({message: 'Purchase Receipt deleted successfully'});
    }catch(err){
        res.status(400).json({message: err.message});
    }
};