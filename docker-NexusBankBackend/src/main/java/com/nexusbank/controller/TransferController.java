package com.nexusbank.controller;

import com.nexusbank.entity.Transfer;
import com.nexusbank.service.TransferService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transfer")
@CrossOrigin(origins = "http://localhost:3000")
public class TransferController {

    private final TransferService transferService;
    public TransferController(TransferService transferService) {
        this.transferService = transferService;
    }

    @PostMapping
    public ResponseEntity<Transfer> transfer(@RequestBody Transfer transfer) {
        Transfer savedTransfer = transferService.makeTransfer(transfer);
        return ResponseEntity.ok(savedTransfer);
    }
}
