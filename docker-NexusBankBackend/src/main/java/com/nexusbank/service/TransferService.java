package com.nexusbank.service;

import com.nexusbank.entity.Transfer;
import com.nexusbank.repository.TransferRepository;
import org.springframework.stereotype.Service;

@Service
public class TransferService {
    private final TransferRepository transferRepository;

    public TransferService(TransferRepository transferRepository) {
        this.transferRepository = transferRepository;
    }

    public Transfer makeTransfer(Transfer transfer) {
        return transferRepository.save(transfer);
    }
}
