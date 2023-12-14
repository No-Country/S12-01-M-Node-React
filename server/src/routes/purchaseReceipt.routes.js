import { Router } from 'express';
import { createPurchaseReceipt, deletePurchaseReceipt, getAllPurchaseReceipts, getPurchaseReceiptById, updatePurchaseReceipt } from '../controllers/purchaseReceipt.controllers';


const router = Router();

router.get('/purchaseReceipts', getAllPurchaseReceipts);
router.get('/purchaseReceipts/:id', getPurchaseReceiptById);
router.post('/purchaseReceipts', createPurchaseReceipt);
router.put('/purchaseReceipts/:id', updatePurchaseReceipt);
router.delete('/purchaseReceipts/:id', deletePurchaseReceipt);

export default router;