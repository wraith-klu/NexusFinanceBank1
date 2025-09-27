package com.nexusbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nexusbank.entity.Transfer;

public interface TransferRepository extends JpaRepository<Transfer, Long> {
}
